---
title:  >-
        An LLM-Assisted Easy-to-Trigger Backdoor Attack on Code Completion Models: Injecting Disguised Vulnerabilities against Strong Detection
date:           2024-06-03 00:01:00 +0800
selected:       true
pub:            "USENIX Security"
# pub_pre:        "Submitted to "
# pub_post:       'Under review.'
# pub_last:       ' <span class="badge badge-pill badge-custom badge-success">Spotlight</span>'
pub_date:       "2024"

abstract: >-
Large Language Models (LLMs) have transformed code completion tasks, providing context-based suggestions to boost developer productivity in software engineering. As users often fine-tune these models for specific applications, poisoning and backdoor attacks can covertly alter the model outputs. To address this critical security challenge, we introduce CodeBreaker, a pioneering LLM-assisted backdoor attack framework on code completion models. Unlike recent attacks that embed malicious payloads in detectable or irrelevant sections of the code (e.g., comments), CodeBreaker leverages LLMs (e.g., GPT-4) for sophisticated payload transformation (without affecting functionalities), ensuring that both the poisoned data for fine-tuning and generated code can evade strong vulnerability detection. CodeBreaker stands out with its comprehensive coverage of vulnerabilities, making it the first to provide such an extensive set for evaluation. Our extensive experimental evaluations and user studies underline the strong attack performance of CodeBreaker across various settings, validating its superiority over existing approaches. By integrating malicious payloads directly into the source code with minimal transformation, CodeBreaker challenges current security measures, underscoring the critical need for more robust defenses for code completion.
cover:          assets/images/covers/cover3.jpg
authors:
  - Shenao Yan
  - Shen Wang
  - Yue Duan
  - Hanbin Hong
  - Kiho Lee
  - Doowon Kim
  - Yuan Hong
links:
  Code: https://github.com/null1024-ws/Poisoning-Attack-on-Code-Completion-Models
  Paper: https://arxiv.org/abs/2406.06822
---

