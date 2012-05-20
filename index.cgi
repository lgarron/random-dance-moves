#!/bin/bash

echo "Content-type: text/html"
echo ""

cat <<HEREDOC
<html>
<title>Random Dance Move Generator</title>
<head>
  <style>
    body {
      background: #FFE;
      font-family: Helvetica, Tahoma, Arial, sans-serif;
    }
    #main {
      font-size: 120%;
      background: #FCC;
      padding: 1em 1em 2em;
      width: 80%;
      margin: 2em auto;
      border-radius: 1em;
      text-align: center;
    }
    #move {
      font-size: 180%;
      width: 80%;
      margin: auto;
      padding: 1em;
      background: #F98;
      border-radius: 1em;
    }
    input {
      margin: 1em 0em 0em;
      padding: 1em;
      width: 50%;
      height: 3em;
      font-size: 100%;
    }
  </style>
</head>
<body>

  <div id="main">
    <h1>Random Dance Move Generator</h1>
    <div id ="move">
HEREDOC

  move=`ocaml dance.ml`
  echo $move # *Not* quoted as a hack to remove spaces.

cat <<HEREDOC
    </div>
    <form  action="" method="get">
      <input type="submit"
HEREDOC

AGAINS=("Gimme Another!" "Welcome another chance intrusion!" "How do I get out of it?" "Tried that last Friday. I want a better one!")
INDEX=$((RANDOM%${#AGAINS[@]}))
AGAIN=${AGAINS[$INDEX]}
echo "value=\"${AGAIN}\""

cat <<HEREDOC
autofocus></input>
    </form>
  </div>

</body>
</html>
HEREDOC