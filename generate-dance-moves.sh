#!/bin/bash

perl cgram.pl dance.gram

echo "----"

for i in {1..12}
do
  ocaml dance.ml
done