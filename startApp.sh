#!/bin/bash

trap "kill 0" EXIT

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