# GitHub 업데이트 가이드

## 1. 변경사항 확인
```bash
git status
```
- 수정된 파일들을 확인합니다

## 2. 변경사항 추가 (Staging)
```bash
# 모든 변경사항 추가
git add .

# 또는 특정 파일만 추가
git add index.html styles.css script.js
```

## 3. 커밋 (Commit)
```bash
git commit -m "변경사항 설명을 여기에 작성"
```

예시:
```bash
git commit -m "입/출금 가이드 잠금 처리 및 거래소 경고 문구 추가"
```

## 4. GitHub에 푸시 (Push)
```bash
git push origin master
```
또는
```bash
git push origin main
```
(브랜치 이름에 따라 다를 수 있습니다)

## 5. 원격 저장소가 설정되지 않은 경우

### 원격 저장소 추가
```bash
git remote add origin https://github.com/사용자명/저장소명.git
```

### 첫 커밋 및 푸시
```bash
git add .
git commit -m "Initial commit"
git push -u origin master
```

## 전체 프로세스 한 번에
```bash
git add .
git commit -m "변경사항 설명"
git push origin master
```

## 주의사항
- 첫 푸시가 아닌 경우 `-u` 옵션은 필요 없습니다
- 브랜치 이름이 `main`인지 `master`인지 확인하세요
- GitHub 인증이 필요할 수 있습니다 (Personal Access Token 사용)

