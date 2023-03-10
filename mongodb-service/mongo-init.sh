set -e

mongosh <<EOF
use $MONGO_DATABASE_NAME
db = db.getSiblingDB('my_db')

db.createUser({
  user: '$MONGO_USER_USERNAME',
  pwd: '$MONGO_USER_PASSWORD',
  roles: [{ role: 'readWrite', db: 'my_db' }],
});

EOF