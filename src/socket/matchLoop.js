/// /CHECK EVERY 20 sec, if all true turn finish, next turn. Else wait 20 sec.
/// If 2 min mark, push new turn.
/// SEND A REFRESH TO ALL SESSIONS.
/// INSIDE EACH SESSION, YOU GET THE MATCH ID AND USER ID AND SEND IT BACK.
/// THEN FROM THAT ONE, YOU REFRESH THE DATA.

// THINK OF A BETTER WAY. THIS IS TOO BUGGY. REACT IS HANDLING THINGS WEIRD. THINK
/// ALSO REMOVE FINISH TURN BUTTON. ALL TURNS LAST 2 MIN.
const matchLoop = (io) => {
  const timer = setInterval(() => {
    io.emit('send_me_match_data');
  }, 5000);
};

export default matchLoop;
