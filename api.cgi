#!/bin/bash

echo "Content-type: text/plain"
echo ""

move=`ocaml dance.ml`
echo $move # *Not* quoted as a hack to remove spaces.