#! /bin/bash
if [ "$(id -u)" != "0" ]; then
    echo "Try running as root" 1>&2
    exit 1
fi

export ANDROID_HOME=/opt/android-sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/platform-tools

TMPDIR=~/myEnv/tmp npx expo run:android
