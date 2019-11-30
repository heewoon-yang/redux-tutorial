//action creator : 액션을 만드는 함수
// const action = {
//   type: 'updateUser',
//   payload: 'Tom'
// }

export const updateUser = (name) => ({
  type: 'updateUser',
  payload: name
});