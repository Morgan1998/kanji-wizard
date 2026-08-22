# kanji-wizard

An Anki note type design meant to make learning kanji a little more magical.

## Why?

During my self studies for becoming a software engineer, I realized I could use my developing skills to solve problems I had while studying for JLPT N3 in 2025. Since I used Anki so much, it seemed like a perfect playground to practice using vanilla javascript, html, and css. It also of course gives my friends and me a really nice deck to study kanji with!

## 🗃️ Data Sources & Provenance (データソースと帰属)

This project strictly adheres to the open-source licenses of the following foundational datasets. Data processing pipelines trace back to their primary upstream creators:

#### 1. Japanese-English Dictionary Dataset (JMdict)

- **Direct Source:** [scriptin/jmdict-simplified (Release 3.6.2+)](https://github.com/scriptin/jmdict-simplified/releases)
- **Upstream Creator:** [EDRDG / Jim Breen](http://www.edrdg.org/) (Electronic Dictionary Research and Development Group)
- **License:** Distributed under the [EDRDG Licence Statement](http://edrdg.org) (Creative Commons Attribution-ShareAlike 3.0 Unported).

#### 2. JLPT Vocabulary Dataset

- **Direct Source:** [Bluskyo/JLPT_Vocabulary](https://github.com/Bluskyo/JLPT_Vocabulary/releases) (Structured JSON/CSV word lists with JLPT classification)
- **Upstream Creator:** Jonathan Waller via [Tanos JLPT Word Lists](https://tanos.co.uk)
- **License:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org)

#### 3. Vocabulary Frequency Dataset **For Anki Deck Generation**

- **Data Source:** [JPDB.io](https://jpdb.io) (Original corpus/frequency data)
- **Format & Infrastructure:** Maintained by [MarvNC](https://github.com/MarvNC/yomitan-dictionaries) via the Yomitan Dictionaries ecosystem.
- **Direct Repository:** [Kuuuube / yomitan-dictionaries](https://github.com/Kuuuube/yomitan-dictionaries) (Mirror/Collection)
- **License/Usage:** Data derived from JPDB.io. This project utilizes the dataset for personal educational and portfolio purposes. Please note that this data is subject to the terms of the original platform and is intended for non-commercial use.

#### 4. Main Kanji Dataset

- **Data Source:** [davidluzgouveia/kanji-data](https://github.com/davidluzgouveia/kanji-data) (Master kanji dataset with over 13,000 kanji, including core data for each kanji entry)
- **Upstream Creator:** [EDRDG / Jim Breen](https://www.edrdg.org/) (Electronic Dictionary Research and Development Group)
- **License:** Distributed under the [EDRDG Licence Statement](http://edrdg.org) (Creative Commons Attribution-ShareAlike 3.0 Unported).

#### 5. JLPT Kanji Dataset

- **Direct Source:** [Renairisu/jlpt_kanji_json_msgpack](https://github.com/Renairisu/jlpt_kanji_json_msgpack) (Kanji lists organized by JLPT level)
- **Upstream Creator:** [kanjiapi.dev](https://kanjiapi.dev) (Primary Kanji API data source)
- **License/Terms:** Explicit compliance with the downstream transformation repository's data structure.

#### 6. YouTube-based Occurrence Ratings

- **Source:** [naist-nlp/tubelex](https://github.com/naist-nlp/tubelex) — Vocabulary dataset assigning frequency metrics to large samples of vocabulary based on a massive YouTube subtitle corpus.

##### Paper Citation

If you use or build upon the TUBELEX dataset, please cite the original authors:

> Nohejl, A., Hudi, F., Kardinata, E. A., Ozaki, S., Riera Machin, M. A., Sun, H., Vasselli, J., & Watanabe, T. (2024). Beyond Film Subtitles: Is YouTube the Best Approximation of Spoken Vocabulary? [arXiv:2410.03240 [cs.CL]].

##### License & Usage

The TUBELEX dataset and its associated code are distributed under the **BSD 3-Clause License**. You can review the full license terms directly in the [TUBELEX Repository](https://github.com/naist-nlp/tubelex/blob/main/LICENSE).
