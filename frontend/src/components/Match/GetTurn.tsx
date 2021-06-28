const GetTurn = (
  params: any,
  io: any,
  eventChoice: string,
  eventId: string
) => {
  const user_name = localStorage.getItem('user_name');
  const match_id = params?.id;
  if (io) {
    io.emit('get_turn', { user_name, match_id, eventChoice, eventId });
  }
};

export default GetTurn;
