#!/bin/zsh
cd "/Users/jiyoun/Library/CloudStorage/OneDrive-Cedars-SinaiHealthSystem/Jiyoun Lab/MyApp/DoerWorship" || exit 1
echo "DOER Worship local server: http://localhost:4173"
python3 -m http.server 4173
