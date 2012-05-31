#!/bin/bash

echo "Content-type: text/plain"
echo ""

echo "Regenerating the dance move grammar."
perl cgram.pl dance.gram
