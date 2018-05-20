
function localtunnel {
  lt -s jolly-wolverine-57 --port 3000
}

until localtunnel; do
echo "localtunnel server crashed"
sleep 2
done