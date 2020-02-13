- deploy to github
  - add to package
    "homepage": "https://nianlu.github.io/classy",
  - deploy
    yarn build
    yarn run deploy

---
gcloud

yarn build && gcloud app deploy

yarn build && gcloud app deploy -v front-test

gcloud app deploy

---

gcloud app deploy dispatch.yaml

---

./Downloads/cloud_sql_proxy -instances=classy-262719:us-east1:classy-dev=tcp:5432