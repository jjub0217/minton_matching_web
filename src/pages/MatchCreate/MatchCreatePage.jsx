import { useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { CancelButton } from "../../components/Button/CancelButton";
import { SaveButton } from "../../components/Button/SaveButton";
import { ActionButtons } from "../../components/Common/ActionButtons.style";
import { Form } from "../../components/Common/Form.style";
import {
  PageContainer,
  PageContainerTitle1,
} from "../../components/Common/PageContainer.style";
import { DateField } from "../../components/FormField/DateField";
import { SelectField } from "../../components/FormField/SelectField";
import { TextField } from "../../components/FormField/TextField";
import { LevelField } from "./components/LevelField";
import { PlaceField } from "./components/PlaceField";

export const MatchCreatePage = () => {
  const [searchParams] = useSearchParams();
  const selectedPlaceName = searchParams.get("place");

  const navigate = useNavigate();

  const place = useSelector((state) => state.matchForm.place);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/match/create/success`);
    // navigate(`/match/create/success`, { state: { formData } });
    // try {
    //   // 서버로 전송
    //   const response = await fetch("/api/match", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(formData),
    //   });

    //   if (!response.ok) throw new Error("저장 실패");

    //   // 성공 시 이동
    //   navigate("/match/create/success");
    // } catch (error) {
    //   alert("오류가 발생했습니다.");
    // }
  };

  return (
    <PageContainer height={"100vh"}>
      <div className="inner">
        <PageContainerTitle1 $margin={"20px 0 24px"}>
          매칭 생성
        </PageContainerTitle1>
        <Form onSubmit={handleSubmit}>
          <TextField
            label="제목"
            placeholder="제목을 입력하세요"
            id="title"
            type="text"
            page="matchCreate"
          />
          <TextField
            label="상세 모임정보"
            placeholder="모임에 대한 상세 정보를 입력하세요"
            id="description"
            type="textarea"
            page="matchCreate"
          />
          <SelectField
            label="참여 정원"
            id="capacity"
            type="select"
            options={[
              { value: "4", label: "4명" },
              { value: "6", label: "6명" },
              { value: "8", label: "8명" },
              { value: "10", label: "10명" },
            ]}
          />
          <DateField label="날짜" id="date" type="date" />

          <PlaceField
            value={selectedPlaceName || place}
            onClickSearch={() => navigate("/match/create/search-place")}
          />

          <LevelField label="급수" id="level" type="custom" />

          <ActionButtons>
            <SaveButton className="save-btn" page={"matchCreate"} />
            <CancelButton className="cancel-btn" page={"matchCreate"} />
          </ActionButtons>
        </Form>
      </div>
    </PageContainer>
  );
};
