# SkySchedule
예약 작업을 실행합니다.

## 설정
`config.json` 파일을 수정합니다.
```json
{
	"schedule": [
		{
			"hour": 16,
			"minute": 29,
			"commands": [
				{
					"cdw": "./",
					"command": "mkdir test"
				}
			]
		}
	]
}
```
`minute`을 입력하지 않으면 00분에 실행합니다.

## 실행
```
node SkySchedule.js
```
```
forever start SkySchedule.js
```

## 라이센스
[MIT](LICENSE)

## 작성자
[Young Jae Sim](https://github.com/Hanul)
