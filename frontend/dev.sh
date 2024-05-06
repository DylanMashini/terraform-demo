pnpm run build --watch &
pid1=$!

pnpm run build:demo --watch &
pid2=$!

pnpm run preview &
pid3=$!

cleanup() {
    echo "Stopping both processes..."
    kill $pid1 $pid2 $pid3
}

trap cleanup SIGINT

wait $pid1 $pid2 $pid3