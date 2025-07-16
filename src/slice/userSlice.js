import { createSlice } from "@reduxjs/toolkit";

const gradeToSkillLevel = {
  A조: "Beginner",
  B조: "Intermediate",
  C조: "Advanced",
  D조: "Pro",
};

// 예시 더미 데이터 (나중에는 API 응답으로 대체될 수 있음)
const dummyUser = {
  profile: {
    name: "김배드민",
    nickName: "user123000",
    joined: "2022.03.15",
    imgUrl: "https://randomuser.me/api/portraits/men/32.jpg",
    grade: "D조", // <- 이걸 변환함
  },
  stats: {
    reviewScore: 4.8,
    penaltyCount: 1,
  },
  location: [
    { id: "loc1", name: "강남구" },
    { id: "loc2", name: "송파구" },
  ],
};

const initialState = {
  formData: {
    imgUrl: dummyUser.profile.imgUrl,
    location: dummyUser.location,
    nickname: dummyUser.profile.nickName,
    skillLevel: gradeToSkillLevel[dummyUser.profile.grade] || "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateField: (state, action) => {
      const { name, value } = action.payload;
      state.formData[name] = value;
    },
    deleteLocation: (state, action) => {
      const id = action.payload;
      state.formData.location = state.formData.location.filter(
        (loc) => loc.id !== id
      );
    },
    addLocation: (state, action) => {
      const newLoc = action.payload;
      if (state.formData.location.length < 2) {
        state.formData.location.push(newLoc);
      }
    },
    updateProfileImage: (state, action) => {
      state.formData.imgUrl = action.payload;
    },
  },
});

export const { updateField, addLocation, deleteLocation, updateProfileImage } =
  userSlice.actions;
export default userSlice.reducer;
