---
field: XAI · Predictive Maintenance
venue: AI4I 2020
title: Explainable Artificial Intelligence for Predictive Maintenance Applications
authors: Stephan Matzka
tldr: 정답 원인을 규칙으로 심은 합성 예지보전 데이터셋(AI4I 2020)을 공개하고, 결정트리 설명 vs 정규화 편차 설명의 품질을 사람 채점으로 비교
tags: [xai, predictive-maintenance, imbalanced-classification, decision-tree, dataset]
paper: https://doi.org/10.1109/AI4I49448.2020.00023
related: ai4i_pdm
date: 2026-07-22
---

# Explainable Artificial Intelligence for Predictive Maintenance Applications (Matzka, 2020)

## 메타정보

- 저자: Stephan Matzka (단독 저자), School of Engineering – Technology and Life, Hochschule für Technik und Wirtschaft Berlin (HTW Berlin), 12459 Berlin, Germany
- 출판: 2020 Third International Conference on Artificial Intelligence for Industries (AI4I 2020), IEEE, pp. 69–74
- DOI / arXiv: DOI 10.1109/AI4I49448.2020.00023 / arXiv 판본 없음 (IEEE Xplore 게재)
- PDF / HTML: IEEE Xplore (기관 접근)
- 데이터셋:
  - 논문 인쇄 링크: `www.explorate.ai/dataset/predictiveMaintenanceDataset.csv` (논문 작성 시점 UCI 제출 중 상태). ▲ 현재 자동 접근 차단 - **인용 시 아래 UCI 경로를 쓸 것**
  - 정식: UCI ML Repository id=601, `https://archive.ics.uci.edu/dataset/601/ai4i+2020+predictive+maintenance+dataset`
  - DOI: `https://doi.org/10.24432/C5HS5C` / 라이선스: CC BY 4.0
  - 로드: `from ucimlrepo import fetch_ucirepo; fetch_ucirepo(id=601)`
  - 미러: Kaggle `stephanmatzka/predictive-maintenance-dataset-ai4i-2020` (저자 본인 계정)
- 분야: XAI (Explainable AI), Predictive Maintenance, 산업 데이터셋
- 왜 읽었나: **데이터셋 제안 + 설명가능성 비교 실험형** 논문의 사례. 딥러닝 아키텍처 계열과 달리, "모델 성능"이 아니라 **설명의 유용성을 사람이 채점**하는 평가 설계를 보는 노트.
- 특이사항: 단독 저자 논문(equal contributor 표기 없음). 저자는 이 논문에서 자신의 선행 연구 [4]를 인용.

## 한 줄 요약

공개된 예지보전 데이터셋이 없다는 문제를, **실제 고장 메커니즘을 규칙으로 심은 합성 데이터셋(10,000행)** 을 만들어 공개하는 것으로 풀고, 그 위에서 **설명가능 모델(작은 결정트리 15개)** 과 **설명 인터페이스(정규화 편차)** 의 설명 품질을 사람 채점으로 비교한 논문.

## 논문 성격

- 유형: **리소스 제안형 + 실험·평가형** (방법 제안형 아님)
- 새 모델/알고리즘 제안? X - bagged trees, 결정트리, 정규화 편차 모두 기존 기법
- 새 접근? △ - 새 알고리즘이 아니라 **설명 품질을 4단계(++ / + / - / - -)로 채점해 두 접근을 정면 비교**하는 평가 프로토콜이 새로움
- 핵심 기여 ->
  1. 공개 가능한 합성 예지보전 데이터셋 (고장 원인이 라벨에 드러나지 않도록 설계)
  2. explainable model vs explanatory interface 의 설명 성능 비교
  3. "결정트리 우선, 실패 시 정규화 편차로 폴백" 이라는 실무적 결론

## 기존 방식 vs 제안 방식

### 기존 방식

- 모델 평가를 **통계적 지표**(confusion matrix, ROC, precision/recall/F1)로만 수행
- 논문 진술: 이 지표들은 "학습/검증/테스트와 유사한 분포의 데이터에서 예측 가능한 통계적 성능"을 보장할 뿐, **개별 데이터 포인트 하나에 대한 신뢰 여부**는 말해주지 못함
- 실제 예지보전 데이터셋은 공개가 거의 안 됨 -> 커뮤니티 검증 불가

### 제안 방식

- 산업 현실을 반영한 **합성 데이터셋 공개** (규칙 기반 고장 5종을 심되, 어느 모드인지 학습시에는 반영하지 않음)
- 복잡한 분류기(bagged trees)의 결과를 두 경로로 설명:
  - **explainable model**: 노드 4개 이하 결정트리 15개
  - **explanatory interface**: 모델 비의존, 특징별 정규화 편차($\sigma$) 최대 2개 제시
- 두 설명을 20개 데이터포인트에 대해 채점·비교

## 논문 따라 읽기

> 논문 Sec II. -> V 순서를 따름

### 1. 데이터셋 구성 (Sec II)

10,000 행 x 6 feature + machine failure 라벨. (논문 본문 기준)

▲ **논문 서술 vs 실제 배포본 차이 (중요)**

- 논문은 "6 features"라고 쓰지만, UCI 배포본은 **10,000행 × 14컬럼**이다: UID, product ID, air temp, process temp, rot. speed, torque, tool wear, machine failure 라벨 + **다섯 고장 모드 플래그(TWF/HDF/PWF/OSF/RNF)**.
- 즉 논문이 "어느 모드가 원인인지는 학습시에 반영하지 않음"이라고 한 정보가 **배포된 데이터셋에는 별도 플래그로 들어 있다.**
- -> 재현 시 이 다섯 플래그는 **타깃 검증용으로만 쓰고 모델링 전 반드시 제거**해야 한다 (leakage control). 후속 재현 프로젝트들의 공통 관행.
- **product ID**: 품질 등급 L(50%) / M(30%) / H(20%) + 등급별 일련번호
- **air temperature [K]**: random walk -> 300 K 근처, $\sigma$ = 2 K로 정규화
- **process temperature [K]**: random walk를 $\sigma$ = 1 K로 정규화 후 **air temp + 10 K**에 더함
- **rotational speed [rpm]**: 2860 W 출력에서 계산, 정규분포 노이즈 중첩
- **torque [Nm]**: 평균 40 Nm, $\sigma$ = 10 Nm 정규분포, 음수 없음
- **tool wear [min]**: H/M/L 등급이 각각 **5/3/2분**의 마모를 누적

**왜 합성 데이터인가**
실제 예지보전 데이터는 공정 노하우가 그대로 노출되므로 기업이 공개하지 않는다. 그래서 저자는 *분포*가 아니라 **인과 규칙**을 손으로 심었다. 덕분에 "정답 원인"을 저자는 알지만 학습시에는 모른다 -> 설명의 정답 채점이 가능해진다. 이게 이 데이터셋이 XAI 평가에 특히 잘 맞는 이유.

### 2. 다섯 가지 독립 고장 모드 (Sec II)


| 모드                    | 규칙                                                                             | 해당 수                              |
| ------------------------- | ---------------------------------------------------------------------------------- | -------------------------------------- |
| TWF (tool wear failure) | tool wear가 200–240분 사이 임의 시점 도달 (120건) -> 그 중 교체 74 /**고장 46** | 120건 발생 (**TWF 플래그=1은 46건**) |
| HDF (heat dissipation)  | (process temp - air temp) < 8.6 K**그리고** rot. speed < 1380 rpm                | 115                                  |
| PWF (power failure)     | torque x rot.speed(rad/s) = 공정 출력.**< 3500 W 또는 > 9000 W**                 | 95                                   |
| OSF (overstrain)        | tool wear x torque >**11,000 minNm (L)** / 12,000 (M) / 13,000 (H)               | 98                                   |
| RNF (random)            | 공정별 0.1 % 확률로 무조건 실패                                                  | 19                                   |

- 하나라도 참이면 machine failure = 1 -> 총 **339건 (3.39 %)**
- ★ **어떤 모드가 원인인지는 라벨에 없다.** 이게 이 데이터셋의 설계 핵심.
- ※ RNF 19건은 10,000건에 0.1 %면 기대값 10건 -> 논문도 "기대보다 잦다"고 명시.
- ※ TWF는 **"120건 발생"과 "46건 고장"을 혼동하기 쉽다.** 논문 본문은 마모 시점 도달 120건을 말하지만, 배포본의 TWF 플래그가 선 건수는 46이다. 후속 문헌들이 TWF n=46으로 집계하는 이유. 인용할 땐 어느 숫자인지 반드시 명시할 것.

**규칙이 항상 2개 이상 특징의 조합인 이유**
단일 임계값이면 트리 1노드로 끝나 XAI 문제가 성립하지 않는다. HDF(온도차 + 회전수), PWF(토크 x 회전수), OSF(마모 x 토크)처럼 **곱/차의 조합**으로 만들어 두면, 개별 특징만 보는 설명은 반드시 부분적으로만 맞게 된다 -> 설명 품질에 등급이 생긴다.

### 3. 복잡 분류기 학습 (Sec III-A)

- SVM, ANN을 초기 평가, 최적화 후 **bagged trees ensemble** 채택
  - 이유: 데이터셋의 고장 규칙 자체가 "최소 2개 특징의 임계값 조합"이라 트리 계열과 궁합이 맞음
- 심한 불균형(339 / 10,000). **false negative 비용을 false positive의 30배**로 설정
- 5-fold cross validation confusion matrix:


|                 | true failure | true operation |
| ----------------- | -------------- | ---------------- |
| pred. failure   | 294 (86.7 %) | 45 (13.3 %)    |
| pred. operation | 121 (1.3 %)  | 9,540 (98.7 %) |

- ▲ (해석) 표의 백분율은 행/열 기준이 혼재해 보인다. 294 + 121 = 415 $\neq$ 339(실제 고장 수)이므로, 표의 셀 배치·수치는 **원문 그대로 옮기되 그대로 신뢰하지 말 것**. 원문 Table I의 표기 자체가 모호함.
- **예측자 중요도** (MATLAB `predictorImportance` [6] 기준, Fig. 2): **torque와 rotational speed가 지배적**, 온도 2종은 낮고 **type은 거의 무시됨**.

### 4. 설명가능 모델: 작은 결정트리 15개 (Sec III-B)

- 각 트리는 **최대 4노드**, 6개 특징 중 **4개만** 사용해 학습 (Table II의 패턴)
- Table II 마지막 행(사용 횟수 합): air 5 / proc 3 / **rot.speed 10 / torque 10** / type 2 / tool wear 6
  -> Fig. 2의 중요도 순서를 거의 그대로 재현
- 예시 트리 #1 (Fig. 1): torque < 13.2 -> 고장(1). torque ≥ 65 이면서 rot.speed ≥ 1228 -> 1, tool wear ≥ 141.5 -> 1.

**고장 모드별 필요 특징 커버리지 (Table III)**

- TWF: tool wear
- HDF: air temp + proc temp + rot. speed
- PWF: torque + rot. speed
- OSF: torque + type + tool wear
  -> **OSF만 어떤 트리도 100 %를 못 채움**(최대 2/3). 원인은 type의 중요도가 낮아 트리 2개에서만 쓰였기 때문. ★ 중요도 -> 특징 선택 -> 설명 실패로 이어지는 연쇄.

### 5. 설명 인터페이스: 정규화 특징 편차 (Sec IV-B)

- 각 특징을 기대값 0, 표준편차 1로 정규화
- **절대 편차가 가장 큰 1–2개 특징**을 사용자에게 제시
- 예 (UID 2672, Table VI): tool wear +1.78$\sigma$ (221분), rot. speed -0.78$\sigma$ (1399 rpm)
  -> "높은 tool wear 221분과 낮은 회전수 1399 rpm 때문에 고장으로 분류" -> 앞은 본질적, 뒤는 무관하지만 결론은 동일함 -> **+ (부분적으로 유용)**

**왜 이게 '설명'이 되나**
모델을 전혀 안 보고 데이터만 본다 -> 완전 model-agnostic. 대신 **모델이 실제로 그 특징을 썼는지는 보장 못 한다.** "이상한 값이 있으니 이게 원인일 것"이라는 상관 기반 추정. ▲ 이건 인과적 설명이 아니라 **이상치 지목**에 가깝다 (논문이 이 표현을 쓰진 않음 - 해석).

### 6. 평가 프로토콜 (Sec IV)

- 20개 데이터포인트 층화 추출: 고장 모드별 5개씩, 각 모드에 L 최소 2개 + M 1개 + H 1개, 전체 L 50 % / M 30 % / H 20 %
- 채점 척도: `++` 매우 유용 / `+` 부분적 유용 / `-` 제한적 / `--` 유용한 설명 없음 / `n/a` (분류기가 애초에 고장으로 못 잡음)
- 트리가 여럿 양성이면 **추정 중요도 합이 가장 큰 특징을 쓰는 트리**를 설명으로 선택. 출력은 양성에 이르는 **경로**.

## 수식 정리

논문에 별도 유도 수식은 없고, 데이터 생성, 고장 규칙이 수식 역할을 한다.

```
process_temp = air_temp + 10 K + N(0, 1 K)      # random walk 기반
P = torque × ω,  ω = rot_speed × 2π / 60        # [rad/s] 변환
```

고장 조건:

```
HDF: (process_temp - air_temp) < 8.6 K  AND  rot_speed < 1380 rpm
PWF: P < 3500 W  OR  P > 9000 W
OSF: tool_wear × torque > 11000 (L) / 12000 (M) / 13000 (H)   # [min·Nm]
TWF: tool_wear ∈ [200, 240] min 중 임의 시점 (46/120 확률로 고장)
RNF: p = 0.001
machine_failure = TWF ∨ HDF ∨ PWF ∨ OSF ∨ RNF
```

정규화 편차 (설명 인터페이스):

```
z_i = (x_i - μ_i) / σ_i          # 기대값 0, 표준편차 1
explanation = argmax_i |z_i|  (상위 1~2개)
```

-> 이 데이터포인트에서 평소와 가장 동떨어진 값 1~2개를 원인으로 지목한다.

## 실험 결과 요약

- **복잡 분류기(bagged trees)**: Table I 기준 고장 탐지 86.7 %, 정상 98.7 %
- **TWF는 분류기 자체가 취약**: Table IV의 BTC 열에서 TWF 5건 중 1건만 1. 원인 - TWF 표본 수 자체가 적고, 교체/고장이 무작위(74 vs 46)라 학습 신호가 없음
- **설명가능 결정트리 (Table V)**
  - TWF 5건: 단 하나의 트리도 양성 없음 -> 원인은 해당 포인트들의 torque가 평범한 값이라서. (torque가 극단이면 그건 PWF/OSF로 분류되어 애초 테스트셋에서 제외됨)
  - HDF 5건 중 3건 미탐지 -> **온도차 특징이 제공되지 않아** 4노드 트리로는 구조적으로 잡을 수 없음
  - 나머지: 매우 유용 9건, 부분 유용 2건, UID 1493은 엣지 케이스
- **정규화 편차 (Table VII)**: 부분 유용 14건, 매우 유용 6건. **설명 누락이 원리적으로 없음**
- **비교 (Fig. 3)**: 트리 = 고품질이지만 4건 무설명 + 5건 n/a / 편차 = 낮은 분산, 중간 품질
- **결론**: 트리 설명이 나오면 트리를, 안 나오면 정규화 편차로 폴백. 단 **두 설명을 동시에 제시하는 것은 비권장** - 상충하는 설명이 주는 혼란이 정보 이득을 능가한다.

## 학습 설정 (재현용 메모)

- 데이터: 논문 기준 10,000행 × 6 feature, 고장 339건 (3.39 %)
  - 실제 로드: `fetch_ucirepo(id=601)` 또는 UCI에서 `ai4i2020.csv` 다운로드 (14컬럼)
  - **전처리 필수**: UID, product ID 제외 / TWF·HDF·PWF·OSF·RNF 플래그는 타깃 검증 후 **드롭**(누수 방지)
- 복잡 분류기: bagged trees ensemble, **5-fold cross validation**
- 비용 행렬: FN cost = 30 × FP cost
- 설명 트리: 15개, **최대 4노드**, 각 트리당 6개 중 4개 특징만 제공 (조합은 Table II)
- 중요도 추정: MATLAB `predictorImportance` (classification ensemble) [6]
- 평가 표본: 20개 (모드별 5개, 등급 층화)
- ※ 논문에 랜덤 시드·트리 개수(ensemble 내)·하이퍼파라미터 상세는 없음 -> 완전 재현 불가

## 어디에 써먹나

- **평가 설계의 본보기**: "정답 원인을 아는 합성 데이터"를 만들면 설명의 품질을 채점할 수 있다. 우리가 XAI 관련 실험을 설계할 때 그대로 차용 가능한 트릭.
- **특징 공학의 교훈**: HDF 미탐지의 원인은 모델이 아니라 **온도차 특징을 안 만들어 준 것**. 파생 특징(difference, product) 하나가 설명가능성을 좌우한다.
- **폴백 아키텍처**: 고품질, 저커버리지 설명 + 저품질, 고커버리지 설명을 계층으로 쌓는 구조는 우리 파이프라인에도 적용 가능.
- AI4I 2020 데이터셋 자체가 불균형 분류, 비용민감 학습 실습용으로 유용.

## 참고할 다른 논문

- [1] D. Gunning, "Explainable Artificial Intelligence (XAI)", DARPA, 2017 - explainable model vs explanatory interface 구분의 출처
- [2] C. Molnar, *Interpretable Machine Learning*, 2020 - XAI 전반 개관 + "설명 두 개 동시 제시 비권장" 근거
- [3] G. McLachlan, *Discriminant Analysis and Statistical Pattern Recognition*, Wiley, 2004 - PCA/LDA 관련
- [4] S. Matzka, "Using Process Quality Prediction to increase Resource Efficiency in Manufacturing Processes", AI4I 2018 - 저자 선행 연구
- [6] MathWorks, `predictorImportance` 문서, 2020 - 중요도 추정 구현
- [7] Ribeiro, Singh, Guestrin, "Why Should I Trust You?: Explaining the Predictions of Any Classifier", KDD 2016 - **LIME**. 논문이 향후 과제로 지목

## 후속 연구 / 계보

- 이 논문의 직접적 산출물인 **AI4I 2020 Predictive Maintenance Dataset**이 UCI ML Repository에 등재되어, 이후 예지보전, 불균형 분류, XAI 벤치마크로 널리 쓰이게 됨 (논문 자체의 인용보다 **데이터셋의 인용**이 이 논문의 주된 계보)
- 논문이 명시한 다음 단계: **LIME [7]** 적용, 그리고 "무설명" 케이스를 줄이기 위해 **true positive 임계값을 점진적으로 낮추는**(FP 증가를 감수하는) 방법 개발
- ※ SHAP 등 이후 XAI 표준 도구와의 비교는 이 논문 범위 밖 (아직 확인하지 않음)

## 한계점

**논문이 직접 인정한 약점**

- 결정트리 설명이 **상당수 케이스에서 아무 설명도 못 내놓음** (Fig. 3의 no 4건)
- TWF 탐지 실패 - 표본 수 부족 + 교체/고장의 무작위성
- HDF 미탐지 - 저노드 트리의 구조적 한계
- 이상적인 분류기 학습은 논문의 초점이 아님을 스스로 명시 (Sec III 서두)

**구조적으로 드러난 약점**

- 데이터가 **합성**이다. 규칙이 결정론적 임계값이라 실제 공정의 연속적, 복합적 열화와 다르다. "realistic"은 저자의 경험 기반 주장일 뿐 검증되지 않음.
- 평가 표본이 **20개**뿐이고, 채점자는 사실상 저자 1인. 채점 척도(++/+/-/--)의 기준이 명시되지 않아 **재현 불가능한 주관 평가**.
- 정규화 편차 방식은 모델을 전혀 참조하지 않으므로, 모델이 실제로 쓰지 않은 특징을 설명으로 내놓을 수 있음. (후속 관점) LIME/SHAP 같은 모델 참조 방식과 비교하면 이 부분이 가장 약함.
- Table I 수치의 내적 일관성이 불명확 (논문 따라 읽기 3절 ▲ 참조).
- **논문 서술과 배포 데이터가 불일치**한다. 본문은 6 feature라 하지만 배포본은 14컬럼이고, 논문이 "비공개"라 강조한 고장 모드가 플래그로 노출되어 있다. 데이터셋 제안이 핵심 기여인 논문에서 문서와 산출물이 어긋난 것은 가볍지 않은 흠. (후속 관점)
- 30배 비용 비율에 근거, 인용이 전혀 없음 (-> 미해결 질문 4).

## 미해결 질문 / 더 파볼 것

1. Table I의 294/121/45/9540과 실제 고장 339건이 맞지 않는 이유는? 5-fold 합산 방식 문제인가, 표기 오류인가 -> 데이터셋 직접 학습해 재현해볼 것.
2. `(process_temp - air_temp)` 파생 특징을 넣어주면 HDF 미탐지 3건이 실제로 해결되는가? **가장 값싼 검증 실험.** 마찬가지로 `torque × tool_wear`를 넣으면 OSF는?
3. 4노드 제한이 "인간이 이해 가능한" 경계라는 근거는? 6노드, 8노드에서 설명 품질 vs 이해도의 trade-off 곡선은 어떻게 생겼나.
4. FN:FP = 30:1 이라는 비용 비율의 근거는 무엇인가. 이 비율이 예측자 중요도(Fig. 2)와 설명 품질에 얼마나 민감한가.
5. 정규화 편차에서 "상위 2개"를 고른 근거는? 1개만 주면 정밀도가 올라가고, 3개면 재현율이 오를 텐데 이 선택의 최적점은.
6. RNF(0.1 % 무작위 고장)는 원리적으로 설명 불가능한데, 평가 표본 20개에 포함되지 않은 이유는? 포함했다면 두 방법 모두 실패했을 것 - 그 실패를 보여주는 것도 정보였을 텐데.
