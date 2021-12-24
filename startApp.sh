#!/bin/bash

trap "pkill -P $$" EXIT

startBackend(){
  cd Backend && npm start && cd ../
}

startFrontEnd() {
  cd Frontend/my-app && npm start && cd ../../
}

startBackend &
startFrontEnd &

wait

echo "Closed App"