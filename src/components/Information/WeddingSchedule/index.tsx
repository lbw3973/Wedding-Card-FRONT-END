import { useEffect, useState } from "react";
import * as S from "./style";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/locale/ko";
import { setHours, setMinutes } from "date-fns";
import { IKakaoAddress, ILatLon } from "@/types/kakao";
import LocationCard from "@/components/Common/LocationCard";
import { GetLatLon } from "@/hooks/useKakaoGetLatLon";
import { Editor, EditorState, RichUtils, convertToRaw } from "draft-js";
import "draft-js/dist/Draft.css";
import { IoIosSubway, IoIosBus, IoIosCar, IoMdQuote } from "react-icons/io";
import { useSetRecoilState } from "recoil";
import { invitationJSONState } from "@/stores/createInvitationJSONStore";

const roadInfo = {
  subway: { name: "지하철", icon: <IoIosSubway />, placeholder: "수원역 5번 출구에서 도보 5~10분" },
  bus: { name: "버스", icon: <IoIosBus />, placeholder: "강남역에서 3003번 버스 이용" },
  car: { name: "자가용", icon: <IoIosCar />, placeholder: "주차 안내" },
  etc: { name: "기타 이동수단", icon: <IoMdQuote />, placeholder: "전세버스 등등" },
};

const WeddingSchedule = () => {
  const [weddingDate, setWeddingDate] = useState(new Date());
  const [address, setAddress] = useState("");
  const [hallData, setHallData] = useState({ hallName: "", hallDetail: "" });
  const [latlon, setLatlon] = useState<ILatLon>({ latitude: 0, longitude: 0 });
  const [editorState, setEditorState] = useState<EditorState[]>(
    new Array(Object.entries(roadInfo).length).fill(EditorState.createEmpty()),
  );

  const setInvitationData = useSetRecoilState(invitationJSONState);

  const handleDateChange = (date: Date) => {
    const offset = 1000 * 60 * 60 * 9;
    const koreaNow = new Date(date.getTime() + offset);

    setInvitationData(previousData => ({
      ...previousData,
      date: koreaNow.toISOString().substring(0, 16),
    }));

    setWeddingDate(date);
  };

  const handleWeddingHallChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = e.target.name;
    const value = e.target.value;

    setHallData(prevData => ({
      ...prevData,
      [inputName]: value,
    }));
  };

  useEffect(() => {
    setInvitationData(previousData => ({
      ...previousData,
      location: {
        ...previousData.location,
        wedding_hall: `${hallData.hallName} ${hallData.hallDetail}`,
      },
    }));
  }, [hallData]);

  const handleSearch = () => {
    new window.daum.Postcode({
      oncomplete: async (data: IKakaoAddress) => {
        setAddress(data.userSelectedType === "J" ? data.jibunAddress : data.roadAddress);
        const res = await GetLatLon(data.userSelectedType === "J" ? data.jibunAddress : data.roadAddress);
        setLatlon({ latitude: res.documents[0].y, longitude: res.documents[0].x });
        setInvitationData(previousData => ({
          ...previousData,
          location: {
            ...previousData.location,
            address: data.userSelectedType === "J" ? data.jibunAddress : data.roadAddress,
            latitude: res.documents[0].y,
            longitude: res.documents[0].x,
          },
        }));
      },
    }).open();
  };

  const toggleInlineStyle = (e: React.MouseEvent<HTMLButtonElement>, index: number) => {
    e.preventDefault();
    const newEditorStateArray = [...editorState];
    newEditorStateArray[index] = RichUtils.toggleInlineStyle(editorState[index], e.currentTarget.id);
    setEditorState(newEditorStateArray);
  };

  const handleChangeEditorState = (newState: EditorState, index: number) => {
    const newEditorStateArray = [...editorState];
    newEditorStateArray[index] = newState;
    setEditorState(newEditorStateArray);
  };

  const handleChangeEtcType = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInvitationData(previousData => ({
      ...previousData,
      etc: {
        ...previousData.etc,
        transport_type: e.target.value,
      },
    }));
  };

  useEffect(() => {
    const states = editorState.map(state => convertToRaw(state.getCurrentContent()));

    Object.entries(roadInfo).map(([key], index) => {
      if (key === "etc") {
        setInvitationData(previousData => ({
          ...previousData,
          etc: {
            ...previousData.etc,
            info: states[index].blocks.map(state => ({
              text: state.text,
              inline_style: state.inlineStyleRanges.map(inlineStyle => ({
                offset: inlineStyle.offset,
                length: inlineStyle.length,
                style: inlineStyle.style,
              })),
            })),
          },
        }));
      } else {
        setInvitationData(previousData => ({
          ...previousData,
          [key]: states[index].blocks.map(state => ({
            text: state.text,
            inline_style: state.inlineStyleRanges.map(inlineStyle => ({
              offset: inlineStyle.offset,
              length: inlineStyle.length,
              style: inlineStyle.style,
            })),
          })),
        }));
      }
    });
  }, [editorState]);

  return (
    <S.Container>
      <h1>웨딩 정보를 입력해주세요.</h1>
      <h3 className="notice">- 날짜를 클릭하면 달력이 표시됩니다.</h3>
      <S.DatePickerContainer>
        <DatePicker
          selected={weddingDate}
          onChange={handleDateChange}
          locale={ko}
          dateFormat="yyyy년 MM월 dd일 HH시 mm분"
          showTimeSelect
          minTime={setHours(setMinutes(new Date(), 0), 9)}
          maxTime={setHours(setMinutes(new Date(), 0), 20)}
          timeIntervals={30}
        />
      </S.DatePickerContainer>
      <S.WeddingHoleContainer>
        <div className="WeddingHole-Input">
          <input placeholder="예식장 명" name="hallName" onChange={handleWeddingHallChange} />
          <input placeholder="층과 홀" name="hallDetail" onChange={handleWeddingHallChange} />
          <div className="WeddingHole-address">
            <input placeholder="검색버튼을 눌러주세요." disabled value={address} />
            <button onClick={handleSearch}>검색</button>
          </div>
        </div>
        {latlon.latitude !== 0 && <LocationCard latitude={latlon.latitude} longitude={latlon.longitude} />}
      </S.WeddingHoleContainer>
      <S.TrafficContainer>
        <h2>교통편 및 주차 안내</h2>
        <div>
          {Object.entries(roadInfo).map(([key, value], index) => (
            <div className="Traffic-Input" key={index}>
              <div className="Transportation">
                {value.icon}
                {key === "etc" ? (
                  <input placeholder="기타 이동수단" id="Etc-Input" onChange={handleChangeEtcType} />
                ) : (
                  <span>{value.name}</span>
                )}
              </div>
              <S.TextEditor>
                <button id="BOLD" onMouseDown={e => toggleInlineStyle(e, index)}>
                  가
                </button>
                <button id="ITALIC" onMouseDown={e => toggleInlineStyle(e, index)}>
                  <span>가</span>
                </button>
                <button id="UNDERLINE" onMouseDown={e => toggleInlineStyle(e, index)}>
                  <span>가</span>
                </button>
              </S.TextEditor>
              <S.EditorContainer>
                <Editor
                  editorState={editorState[index]}
                  onChange={newState => handleChangeEditorState(newState, index)}
                  placeholder={value.placeholder}
                />
              </S.EditorContainer>
            </div>
          ))}
        </div>
      </S.TrafficContainer>
    </S.Container>
  );
};

export default WeddingSchedule;
