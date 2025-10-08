// // import { useReducer, useState } from "react";
// import DashBoardHeader from "../components/DashBoardHeader";

// const initialState = {
//   applications: [],
// };

// const ADD_APPLICATION = "ADD_APPLICATION";
// // const UPDATE_STATUS = "UPDATE_STATUS";
// // const DELETE_APPLICATION = "DELETE_APPLICATION";
// // const UPDATE_APPLICATION = "UPDATE_APPLICATION";

// function reducer(state, action) {
//   switch (action.type) {
//     case ADD_APPLICATION:
//       return {
//         ...state,
//         applications: [...state.applications, action.payload],
//       };
//   }
// }

// function Dashboard() {
//   // const [state, dispatch] = useReducer(reducer, initialState);

//   // const handleAddApplication = (formData) => {
//   //   const newApplication = {
//   //     id: crypto.randomUUID(),
//   //     company: formData.company,
//   //     position: formData.position,
//   //     dateApplied: new Date().toISOString(),
//   //     status: "applied",
//   //   };

//     dispatch({ type: ADD_APPLICATION, payload: newApplication });
//   };

//   return (
//     <div>
//       <DashBoardHeader />
//     </div>
//   );
// }

// export default Dashboard;
