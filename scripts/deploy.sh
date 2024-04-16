npm run build

cd public

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:lvr1997/lvr1997.github.io.git master

cd ../
rm -rf public