#!/bin/bash
source ./scripts/lepus.sh;

LEPUS_ROOT=$(pwd)

echo -e "🛠  Copying..."
cp "$ARIES_FRAMEWORK_GO_ROOT"/cmd/aries-agent-mobile/build/android/aries-agent.aar "$LEPUS_ROOT"/android/aries-agent/aries-agent.aar

echo -e "🔄  Refresh Gradle dependencies in Android Studio"
