# FirstScore
### Project Build

```bash
cd first-score-api
docker build -t first-score-api .

cd ../first-score-db
docker build -t first-score-db .

docker-compose up -d

```