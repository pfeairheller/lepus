#!/bin/bash
# https://unix.stackexchange.com/questions/175648/use-config-file-for-my-shell-script
source ./scripts/config.shlib;

LEPUS_ROOT=$(pwd)

echo -e "🛠  Building..."
cd go/nymble && gomobile bind -o "$LEPUS_ROOT"/ios/lepus/nymble.framework -target=ios > /dev/null

echo -e "✨ xcode should pick up the new framework automagically"
