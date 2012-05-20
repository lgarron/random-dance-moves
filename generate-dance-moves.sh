#!/bin/bash

perl cgram.pl dance.gram

echo "Random Dance Moves a lá Richard Powers:"

for i in {1..12}
do
  move=`ocaml dance.ml`
  echo "- " $move # Hack to remove spaces.
done