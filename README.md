# FirstScore
### Project Build

```bash
cd first-score-api
docker build -t 3000:3000 first-score-api .

cd ../first-score-db
docker build -t 5932:5432 first-score-db .

docker-compose up -d

```