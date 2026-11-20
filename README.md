<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:000000,100:000000&height=180&section=header&text=Karamjot%20Singh&fontSize=48&fontColor=ffffff&animation=fadeIn&fontAlignY=38&desc=AI+Research+Scientist+%C2%B7+Model+Optimization+%C2%B7+NUS+Singapore&descSize=15&descAlignY=62&descColor=555555" width="100%" />

[![Typing SVG](https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=500&size=18&duration=2800&pause=900&color=FFFFFF&center=true&vCenter=true&width=700&height=45&lines=Quantization+%C2%B7+AWQ+%C2%B7+GPTQ+%C2%B7+SmoothQuant;HPC+Inference+%C2%B7+vLLM+%C2%B7+TensorRT-LLM;LLM+Architecture+%C2%B7+Agents+%C2%B7+Evals;Model+Optimization+Researcher+%40+NUS)](https://git.io/typing-svg)

</div>

---

AI Research Scientist · Model Optimization · **NUS Singapore** · [HuggingFace → karamjotsingh](https://huggingface.co/karamjotsingh)

<div align="center">

[![Interactive Knowledge Base](https://img.shields.io/badge/Interactive_Knowledge_Base-Open-ffffff?style=for-the-badge&labelColor=111111&color=222222)](https://karam-nus.github.io/)

</div>

---

## Knowledge Base

> Live chapters link to their pages. *(outline)* marks a page that currently holds the chapter plan only; *(planned)* means the page does not exist yet.

### Language

<details>
<summary><kbd>LANGUAGE MODELLING</kbd> &nbsp;·&nbsp; 38 chapters + 3 appendices &nbsp;<a href="https://karam-nus.github.io/language-modelling/">↗</a></summary>
<br>

From tokens to frontier — understanding, building and deploying large language models.

**Foundations**

`01` [Introduction to Language Modelling](https://karam-nus.github.io/language-modelling/01_introduction) · text → tokens → tensors → predictions  
`02` [Embeddings & Representations](https://karam-nus.github.io/language-modelling/02_embeddings) · dense vectors, RoPE, ALiBi, geometry of meaning  
`03` [The Transformer](https://karam-nus.github.io/language-modelling/03_the_transformer) · complete architecture walkthrough with tensor shapes  
`04` [Attention — SDPA & Multi-Head](https://karam-nus.github.io/language-modelling/04_attention_sdpa_and_mha) · Q/K/V math, causal masking, Flash Attention

**Attention & Architecture**

`05` [Attention Variants — GQA, MQA & MLA](https://karam-nus.github.io/language-modelling/05_attention_gqa_mqa_mla) · KV bottleneck, sliding window, tensor shape comparisons  
`06` [Decoder-Only Models](https://karam-nus.github.io/language-modelling/06_decoder_only_models) · GPT family, LLaMA architecture, open-source landscape  
`07` [Encoder & Seq2Seq Models](https://karam-nus.github.io/language-modelling/07_encoder_and_seq2seq_models) · BERT, T5, BART — encoder vs decoder vs encoder-decoder  
`08` [Multimodal Models](https://karam-nus.github.io/language-modelling/08_multimodal_models) · ViT, Whisper, modality fusion, image-to-token pipelines

**Training**

`09` [Data for LLMs & VLMs](https://karam-nus.github.io/language-modelling/09_data_for_llms) · pre-training, SFT, RLHF, RL data formats & tensor shapes  
`10` [Pre-Training at Scale](https://karam-nus.github.io/language-modelling/10_pretraining_at_scale) · data curation, training objectives, loss curves  
`11` [Optimizers & Loss Functions](https://karam-nus.github.io/language-modelling/11_optimizers_and_loss_functions) · AdamW, Adam-mini, Muon, SOAP, DPO loss  
`12` [Mid-Training & Continued Pre-Training](https://karam-nus.github.io/language-modelling/12_mid_training) · long-context extension, domain adaptation, annealing  
`13` [Fine-Tuning & Adaptation](https://karam-nus.github.io/language-modelling/13_finetuning_and_adaptation) · SFT, LoRA, QLoRA  
`14` [PEFT: LoRA, QLoRA & Variants](https://karam-nus.github.io/language-modelling/14_peft_lora_and_variants) · rank decomposition math, DoRA, rsLoRA, VeRA  
`15` [Alignment — RLHF & Beyond](https://karam-nus.github.io/language-modelling/15_alignment_rlhf_and_beyond) · reward models, PPO, DPO, Constitutional AI

**Inference & Generation**

`16` [Inference & Sampling Strategies](https://karam-nus.github.io/language-modelling/16_inference_and_sampling) · temperature, top-k/p, speculative decoding, structured output  
`17` [KV-Cache — Mechanics & Memory](https://karam-nus.github.io/language-modelling/17_kv_cache_mechanics) · tensor shapes through generation, memory calculations  
`18` [KV-Cache — Optimization Strategies](https://karam-nus.github.io/language-modelling/18_kv_cache_optimization) · PagedAttention, continuous batching, KV quantization

**Quantization**

`19` [Data Types & Numerical Precision](https://karam-nus.github.io/language-modelling/19_data_types_and_precision) · FP32→FP4 bit layouts, BF16 vs FP16  
`20` [Quantization Fundamentals](https://karam-nus.github.io/language-modelling/20_quantization_fundamentals) · affine math, calibration, weight-only vs W+A  
`21` [Quantization Techniques — Full Landscape](https://karam-nus.github.io/language-modelling/21_quantization_techniques) · GPTQ, AWQ, SmoothQuant, KIVI, BitNet  
`22` [Quantization Benchmarks & Selection](https://karam-nus.github.io/language-modelling/22_quantization_benchmarks) · perplexity vs bits, throughput benchmarks, GGUF guide  
`23` [Knowledge Distillation & QAD](https://karam-nus.github.io/language-modelling/23_knowledge_distillation) · feature distillation, fake quantization with STE

**Hardware & Kernels**

`24` [GPU Architecture for ML](https://karam-nus.github.io/language-modelling/24_gpu_architecture) · SMs, Tensor Cores, roofline model, A100/H100/B200  
`25` [CUDA & Kernel Development](https://karam-nus.github.io/language-modelling/25_cuda_and_kernel_development) · Triton kernels, Flash Attention design, fused ops  
`26` [Distributed Training](https://karam-nus.github.io/language-modelling/26_distributed_training) · DDP, FSDP, DeepSpeed ZeRO, 3D parallelism  
`27` [ASICs & Specialized Accelerators](https://karam-nus.github.io/language-modelling/27_asics_and_accelerators) · TPUs, Groq, Trainium, Apple Silicon

**Ecosystem & Tooling**

`28` [The Hugging Face Ecosystem](https://karam-nus.github.io/language-modelling/28_huggingface_ecosystem) · Hub, Spaces, datasets, tokenizers  
`29` [Transformers Library Deep Dive](https://karam-nus.github.io/language-modelling/29_transformers_library) · AutoModel, Trainer, Pipeline internals  
`30` [Evaluation & Benchmarks](https://karam-nus.github.io/language-modelling/30_evaluation_and_benchmarks) · MMLU, HumanEval, lm-eval-harness  
`31` [Serving & Deployment](https://karam-nus.github.io/language-modelling/31_serving_and_deployment) · vLLM, TGI, TensorRT-LLM, Ollama

**Advanced Topics**

`32` [Scaling Laws & Emergent Abilities](https://karam-nus.github.io/language-modelling/32_scaling_laws) · Kaplan, Chinchilla, emergence debate  
`33` [Mixture of Experts](https://karam-nus.github.io/language-modelling/33_mixture_of_experts) · sparse routing, Mixtral, DeepSeek-MoE  
`34` [SSMs & Beyond Transformers](https://karam-nus.github.io/language-modelling/34_ssms_and_alternatives) · Mamba, RWKV, Jamba  
`35` [Reasoning Models](https://karam-nus.github.io/language-modelling/35_reasoning_models) · chain-of-thought, o1-style, test-time compute scaling  
`36` [Retrieval-Augmented Generation](https://karam-nus.github.io/language-modelling/36_rag) · RAG pipeline, embedding models, vector databases  
`37` [Agents & Tool Use](https://karam-nus.github.io/language-modelling/37_agents_and_tool_use) · function calling, coding agents, MCP protocol  
`38` [The Frontier](https://karam-nus.github.io/language-modelling/38_frontier) · long context, world models, safety, interpretability

**Appendices**

`A` [History of Language Modelling](https://karam-nus.github.io/language-modelling/appendix_a_history) · Shannon → GPT-4 — every milestone and breakthrough  
`B` [Tokenization Deep Dive](https://karam-nus.github.io/language-modelling/appendix_b_tokenization) · BPE, WordPiece, SentencePiece, training from scratch  
`C` [HuggingFace Config Reference](https://karam-nus.github.io/language-modelling/appendix_c_model_config) · every config.json parameter explained

</details>

<details>
<summary><kbd>MODELS</kbd> &nbsp;·&nbsp; 8 families · 3 planned &nbsp;<a href="https://karam-nus.github.io/models/">↗</a></summary>
<br>

Architecture deep-dives across generations — release timelines, benchmark tables, diagrams and community perspectives.

**Model Families**

`01` [Qwen](https://karam-nus.github.io/models/01_Qwen) · v1 → 1.5 → 2 → 2.5 → 3  
`02` [Llama](https://karam-nus.github.io/models/02_Llama) · v1 → 2 → 3 → 3.1 → 3.2 → 3.3 → 4  
`03` DeepSeek *(planned)* · V1 → V2 → V3 → R1  
`04` [Gemma](https://karam-nus.github.io/models/04_Gemma) · v1 → 2 → 3 → 4  
`05` Mistral *(planned)* · 7B → Mixtral → Large  
`06` Phi *(planned)* · v1 → 1.5 → 2 → 3 → 4  
`07` [Alpamayo](https://karam-nus.github.io/models/07_Alpamayo) · R1 → 1.5 (VLA)  
`08` [Vision Transformer (ViT)](https://karam-nus.github.io/models/08_ViT) · ViT → DeiT → BEiT → MAE → DINOv2 → EVA-02 → ViT-22B

</details>

<details>
<summary><kbd>AGENTS</kbd> &nbsp;·&nbsp; 14 chapters &nbsp;<a href="https://karam-nus.github.io/agents/">↗</a></summary>
<br>

From zero to agent developer — understanding, building and deploying AI agents and agentic workflows.

**Foundation**

`01` [What Are Agents?](https://karam-nus.github.io/agents/01_what_are_agents) · definition, paradigm shift, when to use agents vs plain LLMs  
`02` [History & Evolution](https://karam-nus.github.io/agents/02_history_and_evolution) · ELIZA → expert systems → ReAct → autonomous agents  
`03` [Anatomy of an Agent](https://karam-nus.github.io/agents/03_anatomy_of_an_agent) · the 4 pillars: LLM brain, tools, memory, planning  
`04` [The Agent Loop](https://karam-nus.github.io/agents/04_the_agent_loop) · observe → think → act cycle, autonomous execution

**Core Capabilities**

`05` [Tools & Function Calling](https://karam-nus.github.io/agents/05_tools_and_function_calling) · function calling APIs, MCP protocol, custom tools  
`06` [Memory Systems](https://karam-nus.github.io/agents/06_memory_systems) · working memory, short/long-term, vector stores, RAG  
`07` [Planning & Reasoning](https://karam-nus.github.io/agents/07_planning_and_reasoning) · CoT, ReAct, Reflexion, task decomposition, self-correction

**Scaling Up**

`08` [Multi-Agent Systems](https://karam-nus.github.io/agents/08_multi_agent_systems) · communication patterns, supervisor & swarm architectures  
`09` [Agentic Frameworks & SDKs](https://karam-nus.github.io/agents/09_agentic_frameworks) · LangGraph, CrewAI, AutoGen, OpenAI Agents SDK

**Hands-On & Production**

`10` [Build Your First Agent](https://karam-nus.github.io/agents/10_build_your_first_agent) · research assistant with OpenAI SDK + LangGraph  
`11` [Agentic Design Patterns](https://karam-nus.github.io/agents/11_agentic_design_patterns) · router, orchestrator-worker, evaluator-optimizer, HITL  
`12` [Deployment & Production](https://karam-nus.github.io/agents/12_deployment_and_production) · observability, cost management, safety guardrails  
`13` [Open Source Landscape](https://karam-nus.github.io/agents/13_open_source_landscape) · 30+ curated projects: frameworks, apps, benchmarks, infra  
`14` [Career Guide](https://karam-nus.github.io/agents/14_career_guide) · skills roadmap, portfolio projects, interview topics

</details>

---

### Vision

<details>
<summary><kbd>VISION</kbd> &nbsp;·&nbsp; 43 chapters + 3 appendices · 40 in outline &nbsp;<a href="https://karam-nus.github.io/vision/">↗</a></summary>
<br>

From pixels to predictions — CV use cases, architectures, optimization, deployment and the research frontier.

**Overview & Foundations**

`00` [Grand Overview](https://karam-nus.github.io/vision/00_grand_overview) · full CV landscape — tasks, history, benchmarks  
`01` [Image Fundamentals](https://karam-nus.github.io/vision/01_image_fundamentals) · images as tensors [B,C,H,W], color spaces, preprocessing

**Use Cases**

`02` [Image Classification](https://karam-nus.github.io/vision/02_image_classification) · softmax, zero-shot, ImageNet  
`03` [Object Detection](https://karam-nus.github.io/vision/03_object_detection) · two-stage vs one-stage, NMS deep dive, mAP  
`04` [Semantic Segmentation](https://karam-nus.github.io/vision/04_semantic_segmentation) · encoder-decoder, dilated convolutions, mIoU  
`05` [Instance Segmentation](https://karam-nus.github.io/vision/05_instance_segmentation) · Mask R-CNN, SAM, query-based methods  
`06` [Object Tracking](https://karam-nus.github.io/vision/06_object_tracking) *(outline)* · Kalman filter, Hungarian algorithm, SORT → ByteTrack  
`07` [Pose Estimation](https://karam-nus.github.io/vision/07_pose_estimation) *(outline)* · keypoints, heatmaps, PAF, top-down vs bottom-up  
`08` [Face Recognition](https://karam-nus.github.io/vision/08_face_recognition) *(outline)* · detection, alignment, ArcFace/CosFace/SphereFace  
`09` [Depth Estimation](https://karam-nus.github.io/vision/09_depth_estimation) *(outline)* · stereo, monocular depth, LiDAR fusion  
`10` [Optical Flow](https://karam-nus.github.io/vision/10_optical_flow) *(outline)* · Lucas-Kanade, FlowNet, RAFT  
`11` [Video Understanding](https://karam-nus.github.io/vision/11_video_understanding) *(outline)* · action recognition, 3D conv, temporal transformers  
`12` [3D Vision](https://karam-nus.github.io/vision/12_3d_vision) *(outline)* · point clouds, NeRF, 3D Gaussian splatting, SLAM  
`13` [Anomaly Detection](https://karam-nus.github.io/vision/13_anomaly_detection) *(outline)* · one-class learning, PatchCore, reconstruction-based  
`14` [OCR & Document Understanding](https://karam-nus.github.io/vision/14_ocr_and_document_understanding) *(outline)* · CRNN+CTC, end-to-end OCR, LayoutLM  
`15` [Medical Imaging](https://karam-nus.github.io/vision/15_medical_imaging) *(outline)* · segmentation, classification, domain challenges, MedSAM  
`16` [Multimodal Vision Tasks](https://karam-nus.github.io/vision/16_multimodal_vision_tasks) *(outline)* · VQA, captioning, visual grounding, text-to-image

**Architectures**

`17` [CNN Fundamentals](https://karam-nus.github.io/vision/17_cnn_fundamentals) *(outline)* · convolution math, receptive fields, depthwise convs  
`18` [Classification Architectures](https://karam-nus.github.io/vision/18_classification_architectures) *(outline)* · ResNet, MobileNet, EfficientNet, ViT, Swin, ConvNeXt  
`19` [Detection Architectures](https://karam-nus.github.io/vision/19_detection_architectures) *(outline)* · YOLO v1→v11, Faster R-CNN, DETR, RT-DETR  
`20` [Segmentation Architectures](https://karam-nus.github.io/vision/20_segmentation_architectures) *(outline)* · FCN, U-Net, DeepLab v3+, Mask2Former, SAM  
`21` [Pose Architectures](https://karam-nus.github.io/vision/21_pose_architectures) *(outline)* · HRNet, ViTPose, OpenPose, WholeBody  
`22` [Face Architectures](https://karam-nus.github.io/vision/22_face_architectures) *(outline)* · MTCNN, RetinaFace, MobileFaceNet, ArcFace  
`23` [Tracking Architectures](https://karam-nus.github.io/vision/23_tracking_architectures) *(outline)* · SORT, DeepSORT, ByteTrack, StrongSORT  
`24` [Vision Transformers](https://karam-nus.github.io/vision/24_vision_transformers) *(outline)* · ViT, DeiT, Swin, MAE, DINO, DINOv2  
`25` [Multimodal Architectures](https://karam-nus.github.io/vision/25_multimodal_architectures) *(outline)* · CLIP, BLIP-2, LLaVA, Grounding DINO, SAM 2

**Optimization**

`26` [Optimization Overview](https://karam-nus.github.io/vision/26_optimization_overview) *(outline)* · accuracy-speed-size triangle, profiling taxonomy  
`27` [Quantization](https://karam-nus.github.io/vision/27_quantization) *(outline)* · PTQ, QAT, INT8/FP8, mixed precision  
`28` [Pruning & Sparsification](https://karam-nus.github.io/vision/28_pruning_and_sparsification) *(outline)* · structured/unstructured, lottery ticket, ASP  
`29` [Knowledge Distillation](https://karam-nus.github.io/vision/29_knowledge_distillation) *(outline)* · feature mimicking, attention transfer  
`30` [Neural Architecture Search](https://karam-nus.github.io/vision/30_neural_architecture_search) *(outline)* · DARTS, Once-for-All, EfficientNet  
`31` [Efficient Inference](https://karam-nus.github.io/vision/31_efficient_inference) *(outline)* · ONNX, TensorRT, OpenVINO, TFLite, CoreML

**Data & Training**

`32` [Datasets](https://karam-nus.github.io/vision/32_datasets) *(outline)* · ImageNet, COCO, ADE20K, LFW, Kinetics, KITTI, MVTec  
`33` [Data Augmentation](https://karam-nus.github.io/vision/33_data_augmentation) *(outline)* · MixUp, CutMix, Mosaic, AutoAugment, Copy-Paste  
`34` [Training Recipes](https://karam-nus.github.io/vision/34_training_recipes) *(outline)* · loss functions, AdamW, LR schedules, EMA  
`35` [Self-Supervised Learning](https://karam-nus.github.io/vision/35_self_supervised_learning) *(outline)* · SimCLR, MoCo, BYOL, MAE, DINO

**Deployment & Ecosystem**

`36` [Deployment](https://karam-nus.github.io/vision/36_deployment) *(outline)* · ONNX export, Triton/TorchServe, edge (Jetson/mobile)  
`37` [Ecosystem & Libraries](https://karam-nus.github.io/vision/37_ecosystem_and_libraries) *(outline)* · timm, MMDetection, Detectron2, Ultralytics, Roboflow  
`38` [Evaluation & Benchmarks](https://karam-nus.github.io/vision/38_evaluation_and_benchmarks) *(outline)* · mAP computation, OKS, HOTA, FID, Rank-1

**Frontier**

`39` [Vision–Language Models](https://karam-nus.github.io/vision/39_vision_language_models) *(outline)* · CLIP ecosystem, GPT-4V, Gemini Vision  
`40` [Foundation Models](https://karam-nus.github.io/vision/40_foundation_models) *(outline)* · SAM, DINOv2, Florence-2, InternVL  
`41` [Generative Vision](https://karam-nus.github.io/vision/41_generative_vision) *(outline)* · GANs, VAEs, DDPM, Stable Diffusion, ControlNet  
`42` [The Frontier](https://karam-nus.github.io/vision/42_frontier) *(outline)* · world models, 3DGS, embodied AI, neuromorphic vision

**Appendices**

`A` [History of Computer Vision](https://karam-nus.github.io/vision/appendix_a_history) *(outline)* · Hubel & Wiesel → SAM 2  
`B` [Math Foundations](https://karam-nus.github.io/vision/appendix_b_math_foundations) *(outline)* · linear algebra, convolutions, Fourier, probability  
`C` [Glossary](https://karam-nus.github.io/vision/appendix_c_glossary) *(outline)* · every key term, acronym, and metric defined

</details>

<details>
<summary><kbd>OBJECT DETECTION</kbd> &nbsp;·&nbsp; 53 chapters + 7 appendices &nbsp;<a href="https://karam-nus.github.io/object-detection/">↗</a></summary>
<br>

From IoU to YOLO26 and beyond — how machines find, box and name things, from MCU detectors to billion-parameter grounding models.

**Orientation**

`00` [The Whole Field on One Page](https://karam-nus.github.io/object-detection/00_grand_overview) · six decisions inside every detector, the model map, what to read first  
`01` [A Short History of Finding Things](https://karam-nus.github.io/object-detection/01_history) · Viola–Jones → DPM → R-CNN → YOLO/SSD → RetinaNet → DETR → RT-DETR

**Foundations**

`02` [The Detection Problem, Formally](https://karam-nus.github.io/object-detection/02_the_detection_problem) · output sets, box parameterisations, coordinate conventions  
`03` [IoU and Its Family](https://karam-nus.github.io/object-detection/03_iou_family) · IoU, GIoU, DIoU, CIoU, EIoU, SIoU, NWD, ProbIoU, derived  
`04` [Anchors, Points and Queries](https://karam-nus.github.io/object-detection/04_anchors_points_queries) · three ways a network proposes boxes, strides, grids  
`05` [Label Assignment](https://karam-nus.github.io/object-detection/05_label_assignment) · hidden heart of detection, max-IoU, ATSS, OTA/SimOTA, TAL  
`06` [Losses](https://karam-nus.github.io/object-detection/06_losses) · focal, QFL, VFL, IoU losses, DFL, L1  
`07` [Post-Processing & NMS](https://karam-nus.github.io/object-detection/07_post_processing) · greedy, batched, Soft-, DIoU-, Matrix-NMS, WBF — and going NMS-free  
`08` [Metrics](https://karam-nus.github.io/object-detection/08_metrics) · AP as pycocotools computes it, AR, LVIS AP, TIDE, how mAP misleads  
`09` [Datasets, Formats & Annotation](https://karam-nus.github.io/object-detection/09_datasets_and_annotation) · COCO, Objects365, LVIS, OpenImages, RF100-VL  
`10` [Augmentation](https://karam-nus.github.io/object-detection/10_augmentation) · box-aware geometry, mosaic, mixup, copy-paste, LSJ, letterbox

**Building Blocks**

`11` [Backbones](https://karam-nus.github.io/object-detection/11_backbones) · ResNet → CSPDarknet → ELAN/GELAN → RepVGG → HGNetV2 → ViT/DINOv2/v3  
`12` [Necks](https://karam-nus.github.io/object-detection/12_necks) · FPN, PAN, BiFPN, RepGFPN, gather-and-distribute, hybrid encoders  
`13` [Heads](https://karam-nus.github.io/object-detection/13_heads) · coupled vs decoupled, anchor-based vs free, DFL heads

**The Detector Landscape**

`14` [Classic Detectors](https://karam-nus.github.io/object-detection/14_classic_detectors) · the R-CNN family, SSD, RetinaNet, FCOS, CenterNet, EfficientDet  
`15` [Very Tiny Detectors](https://karam-nus.github.io/object-detection/15_tiny_detectors) · sub-1 M-parameter and MCU detectors, FOMO, Yolo-Fastest, NanoDet  
`16` [Edge Detectors](https://karam-nus.github.io/object-detection/16_edge_detectors) · phones, Jetson, NPUs, what makes a model edge-friendly  
`17` [Large Detectors](https://karam-nus.github.io/object-detection/17_large_detectors) · Co-DETR, DINO with Swin-L/ViT-L, Objects365 pre-training, the 60+ AP club  
`18` [DETR and Its Descendants](https://karam-nus.github.io/object-detection/18_detr_family) · set prediction, Hungarian matching, Deformable → DINO → Co-DETR  
`19` [Real-Time DETRs & ViT Backbones](https://karam-nus.github.io/object-detection/19_realtime_detrs_and_vit) · RT-DETR v1–v4, LW-DETR, D-FINE, DEIM/v2, RF-DETR, EdgeCrafter  
`20` [Open-Vocabulary & Grounded Detection](https://karam-nus.github.io/object-detection/20_open_vocabulary) · OWL-ViT/v2, GLIP, Grounding DINO, YOLO-World, YOLOE, DINO-X  
`21` [LLM-Based Detection](https://karam-nus.github.io/object-detection/21_llm_based_detection) · boxes as tokens, Kosmos-2 → Qwen3-VL, Florence-2, Rex-Omni

**YOLO: The Complete Treatment**

`22` [The YOLO Matrix](https://karam-nus.github.io/object-detection/22_yolo_matrix) · eleven orthogonal axes and the version × axis grid  
`23` [Family Tree & Lineage](https://karam-nus.github.io/object-detection/23_yolo_family_tree) · who built which YOLO, naming chaos, forks, licenses  
`24` [YOLOv1–v3: Founding Ideas](https://karam-nus.github.io/object-detection/24_yolo_v1_to_v3) · grid cells, k-means anchors, Darknet, multi-scale heads  
`25` [YOLOv4–v7 and the Forks](https://karam-nus.github.io/object-detection/25_yolo_v4_to_v7) · bag of freebies, CSP, YOLOv5's engineering, YOLOX, PP-YOLOE  
`26` [YOLOv8 → YOLO26 (and YOLO27)](https://karam-nus.github.io/object-detection/26_yolo_v8_to_yolo26) · anchor-free + DFL, PGI/GELAN, NMS-free dual assignment  
`27` [Axis 1 — Data](https://karam-nus.github.io/object-detection/27_yolo_data) · the YOLO label format, data.yaml, dataset sizing, class balance  
`28` [Axis 2 — Preprocessing & Augmentation](https://karam-nus.github.io/object-detection/28_yolo_preprocessing_augmentation) · letterbox maths, rect batches, mosaic internals, mixup  
`29` [Axis 3 — Architecture Anatomy](https://karam-nus.github.io/object-detection/29_yolo_architecture) · C3, C2f, C3k2, ELAN, GELAN, SPPF, C2PSA, RepConv, tensor shapes  
`30` [Axis 4 — Assignment & Loss](https://karam-nus.github.io/object-detection/30_yolo_assignment_and_loss) · v3 IoU, v5 cross-grid ratios, SimOTA, TAL maths, DFL derivation  
`31` [Axis 5 — Training Recipe](https://karam-nus.github.io/object-detection/31_yolo_training_recipe) · SGD/AdamW/MuSGD, LR schedules, warm-up, EMA, nominal batch 64  
`32` [Axis 6 — Hyperparameter Tuning](https://karam-nus.github.io/object-detection/32_yolo_hyperparameter_tuning) · genetic evolution, Ray Tune/Optuna, what to tune first, budgets  
`33` [Axis 7 — Metrics & Validation](https://karam-nus.github.io/object-detection/33_yolo_metrics_and_validation) · Ultralytics mAP vs pycocotools, val-time NMS, the fitness score  
`34` [Axis 8 — Family Performance](https://karam-nus.github.io/object-detection/34_yolo_family_performance) · v5u → YOLO26 (+ YOLO27 preview) on one table, Pareto fronts  
`35` [Axis 9 — Ease of Use, Ecosystem & Licensing](https://karam-nus.github.io/object-detection/35_yolo_ease_of_use_and_licensing) · APIs, CLIs, integrations, AGPL vs GPL vs Apache  
`36` [Axis 10 — Export & Deployment](https://karam-nus.github.io/object-detection/36_yolo_export_and_deployment) · ONNX, TensorRT, OpenVINO, CoreML, LiteRT, NCNN, RKNN, Hailo  
`37` [Axis 11 — Novel Optimisations](https://karam-nus.github.io/object-detection/37_yolo_novel_optimizations) · re-param, PGI, dual assignment, MuSGD, STAL, area attention  
`38` [YOLO Beyond Boxes](https://karam-nus.github.io/object-detection/38_yolo_beyond_boxes) · segmentation, pose, OBB, classification, open-vocab, tracking  
`39` [Hands-On: YOLO From Scratch](https://karam-nus.github.io/object-detection/39_yolo_from_scratch) · build, train and evaluate a modern YOLO on a CPU with odlab

**Training & Data Strategy**

`40` [Training Detectors in Practice](https://karam-nus.github.io/object-detection/40_training_in_practice) · fine-tuning vs scratch, small data, long tail, class imbalance  
`41` [Small Objects](https://karam-nus.github.io/object-detection/41_small_objects) · why small objects fail, P2 heads, high resolution, SAHI tiling  
`42` [Label-Efficient Learning & Distillation](https://karam-nus.github.io/object-detection/42_label_efficient_and_distillation) · semi-supervised teachers, auto-labelling with foundation models  
`43` [Oriented, 3D, Video & Domain Shift](https://karam-nus.github.io/object-detection/43_specialized_detection) · OBB maths, crowded scenes, LiDAR/BEV, video, domain adaptation

**Deployment**

`44` [Hardware & Runtimes](https://karam-nus.github.io/object-detection/44_hardware_and_runtimes) · GPUs, CPUs, edge NPUs, MCUs, the operator-support matrix  
`45` [Quantising & Compressing Detectors](https://karam-nus.github.io/object-detection/45_quantization_and_compression) · why detectors quantize worse than classifiers, sensitive layers  
`46` [Measuring Latency Honestly](https://karam-nus.github.io/object-detection/46_measuring_latency) · what is in "1.7 ms", pre/post-processing, batch, warm-up  
`47` [Detection in Production](https://karam-nus.github.io/object-detection/47_production_systems) · pipelines, per-class thresholds, calibration, monitoring

**Practice & Decisions**

`48` [Hands-On: Fine-Tune, Evaluate, Export](https://karam-nus.github.io/object-detection/48_handson_finetune_export) · YOLO26 vs RF-DETR on one custom dataset, evaluated and exported  
`49` [Hands-On: Zero-Shot → Edge](https://karam-nus.github.io/object-detection/49_handson_zero_shot_to_edge) · auto-label with YOLOE / Grounding DINO / a VLM, train a nano model  
`50` [The Debugging Playbook](https://karam-nus.github.io/object-detection/50_debugging_playbook) · symptom → cause → diagnostic → fix, training to deployment  
`51` [The Decision Guide](https://karam-nus.github.io/object-detection/51_decision_guide) · flowcharts by constraint, each ending in a concrete model + recipe  
`52` [The Frontier](https://karam-nus.github.io/object-detection/52_frontier) · detection as language, unified perception, test-time compute

**Interactive**

`LAB` [Interactive Labs](https://karam-nus.github.io/object-detection/labs) · all six labs on one page  
`MAP` [Detection Atlas](https://karam-nus.github.io/object-detection/atlas) · filter, sort and plot every detector in the book

**Appendices**

`A` [Glossary & Symbols](https://karam-nus.github.io/object-detection/appendix_a_glossary) · every term and symbol, one canonical definition each  
`B` [Math Reference](https://karam-nus.github.io/object-detection/appendix_b_math) · IoU gradients, focal-loss derivative, DFL optimum  
`C` [Model Index](https://karam-nus.github.io/object-detection/appendix_c_model_index) · every detector × params × FLOPs × AP × latency × license  
`D` [Dataset Index](https://karam-nus.github.io/object-detection/appendix_d_datasets) · every dataset × size × classes × domain × license  
`E` [Hardware & Export Matrix](https://karam-nus.github.io/object-detection/appendix_e_hardware_export_matrix) · runtime × operator support × precision × NMS × known traps  
`F` [Bibliography](https://karam-nus.github.io/object-detection/appendix_f_bibliography) · reading list by theme, with a suggested order  
`G` [Question Bank](https://karam-nus.github.io/object-detection/appendix_g_question_bank) · 120 self-test and interview questions with answers

</details>

---

### Efficiency & Hardware

<details>
<summary><kbd>QUANTIZATION</kbd> &nbsp;·&nbsp; 50 chapters + 5 appendices · outline draft &nbsp;<a href="https://karam-nus.github.io/quantization/">↗</a></summary>
<br>

From the affine map to the accelerator — how networks are compressed into integers, why it works, when it breaks, and what actually runs faster. *Outline draft — chapters are being written.*

**Orientation**

`00` [The Whole Field on One Page](https://karam-nus.github.io/quantization/00_grand_overview) · six axes: what, where, when, format, algorithm, hardware

**Foundations**

`01` [Hardware Compatibility & the Q/DQ Contract](https://karam-nus.github.io/quantization/01_hardware_and_the_qdq_contract) · what accelerators actually execute, why Q/DQ nodes exist  
`02` [Number Formats & Bit Layouts](https://karam-nus.github.io/quantization/02_number_formats) · FP32→FP4, INT8→ternary, NF4, MXFP4, NVFP4, bit layouts, ranges  
`03` [The Quantization Formula, Derived](https://karam-nus.github.io/quantization/03_the_quantization_formula) · affine & symmetric maps, rounding vs clipping, SQNR, integer-only inference  
`04` [Granularity — Where the Scales Live](https://karam-nus.github.io/quantization/04_granularity) · per-tensor → per-channel → per-group → per-block → per-token → MX  
`05` [Q/DQ in the Graph](https://karam-nus.github.io/quantization/05_graph_representation) · fake vs real quant, ONNX QDQ vs QOperator, BN folding  
`06` [Calibration — Choosing the Range](https://karam-nus.github.io/quantization/06_calibration) · min-max, percentile, histogram, KL-divergence, MSE, cosine  
`07` [Choosing the Targets](https://karam-nus.github.io/quantization/07_what_to_quantize) · weights vs activations vs KV-cache vs gradients

**Methods & Regimes**

`08` [Beyond PTQ vs QAT](https://karam-nus.github.io/quantization/08_method_taxonomy) · six axes people miss, data-free, reconstruction, dynamic/static  
`09` [Dynamic vs Static Quantization](https://karam-nus.github.io/quantization/09_dynamic_vs_static) · per-token ranges at runtime: cheap for LLM decode, costly for CNNs  
`10` [Data-Free & Zero-Shot](https://karam-nus.github.io/quantization/10_data_free_quantization) · cross-layer equalization, bias correction, ZeroQ, SQuant, HQQ  
`11` [Layer-wise Reconstruction PTQ](https://karam-nus.github.io/quantization/11_reconstruction_ptq) · AdaRound, AdaQuant, BRECQ, QDrop, OBQ  
`12` [QAT Foundations](https://karam-nus.github.io/quantization/12_qat_foundations) · STE and its bias, LSQ, LSQ+, PACT, DSQ, TQT, BN handling  
`13` [Quantization-Aware Distillation](https://karam-nus.github.io/quantization/13_quantization_aware_distillation) · quantized student, FP teacher — when the second forward pass pays off  
`14` [Mixed Precision & Bit Allocation](https://karam-nus.github.io/quantization/14_mixed_precision_search) · sensitivity analysis, HAWQ, HAQ, Pareto frontiers  
`15` [The Outlier Problem](https://karam-nus.github.io/quantization/15_outliers) · why activation outliers exist; clip, isolate, equalize, rotate  
`16` [Non-Uniform & Codebook Quantization](https://karam-nus.github.io/quantization/16_nonuniform_and_codebook) · k-means, VQ/PQ, AQLM, QuIP# lattices, NF4, log grids

**CNN & Vision**

`17` [What Breaks in a ConvNet](https://karam-nus.github.io/quantization/17_cnn_quantization_anatomy) · depthwise convs, SE blocks, residual/concat requant  
`18` [CNN PTQ Recipes](https://karam-nus.github.io/quantization/18_cnn_ptq_practice) · canonical config, target variations, the INT8 escalation ladder  
`19` [CNN QAT Recipes](https://karam-nus.github.io/quantization/19_cnn_qat_practice) · epoch budgets, LR, observer/BN freezing, recovering MobileNetV3  
`20` [Detection & Dense Prediction](https://karam-nus.github.io/quantization/20_detection_and_dense_prediction) · why detectors quantize worse than classifiers, regression heads  
`21` [Quantizing Vision Transformers](https://karam-nus.github.io/quantization/21_vision_transformers) · PTQ4ViT, FQ-ViT, RepQ-ViT, post-LayerNorm/Softmax distributions

**LLM Quantization**

`22` [Why LLMs Are a Different Problem](https://karam-nus.github.io/quantization/22_why_llms_differ) · memory-bound decode, the roofline argument, why weight-only suffices  
`23` [Weight-Only Baselines](https://karam-nus.github.io/quantization/23_weight_only_baselines) · LLM.int8(), NF4 + double quant, HQQ, Quanto, TorchAO  
`24` [GPTQ](https://karam-nus.github.io/quantization/24_gptq) · OBS → OBC → GPTQ derived, the Hessian, the column update  
`25` [AWQ](https://karam-nus.github.io/quantization/25_awq) · activation-aware salience, the diagonal transform equivalence  
`26` [SmoothQuant & Activation-Weight Balancing](https://karam-nus.github.io/quantization/26_smoothquant) · the α migration rule derived, folding into LayerNorm  
`27` [Rotation & Incoherence](https://karam-nus.github.io/quantization/27_rotation_methods) · QuaRot, SpinQuant, FlatQuant, DuQuant, Hadamard transforms  
`28` [W4A8 & Full-Stack Schemes](https://karam-nus.github.io/quantization/28_w4a8_and_fullstack) · QoQ/QServe, Atom, ZeroQuant, OmniQuant  
`29` [FP8 & FP4](https://karam-nus.github.io/quantization/29_fp8_and_fp4) · E4M3/E5M2 recipes, delayed scaling, Transformer Engine  
`30` [2-Bit and Below](https://karam-nus.github.io/quantization/30_extreme_low_bit) · QuIP#, AQLM, PB-LLM, BitNet b1.58, OneBit  
`31` [KV-Cache Quantization](https://karam-nus.github.io/quantization/31_kv_cache_quantization) · KIVI, KVQuant, per-channel K / per-token V, FP8 KV  
`32` [Fine-Tuning Quantized Models](https://karam-nus.github.io/quantization/32_quantized_finetuning) · QLoRA, LoftQ, QA-LoRA, EfficientQAT, BitDelta  
`33` [MoE, SSMs & Multimodal](https://karam-nus.github.io/quantization/33_moe_ssm_multimodal) · per-expert scales, router precision, Mamba/Quamba  
`34` [Do LLM Methods Work on CNNs?](https://karam-nus.github.io/quantization/34_cross_pollination) · what transfers CNN ↔ LLM (conv-as-GEMM, Hessians) and what doesn’t

**Formats**

`35` [GGUF I — Container & Block Quantization](https://karam-nus.github.io/quantization/35_gguf_part1) · why GGUF is block-based, Q4_0…Q8_0 bit layouts and dequant  
`36` [GGUF II — K-Quants, I-Quants & Choosing](https://karam-nus.github.io/quantization/36_gguf_part2) · superblocks and two-level scales, Q2_K…Q6_K byte by byte  
`37` [Every Other Format](https://karam-nus.github.io/quantization/37_other_formats) · compressed-tensors, GPTQ/AWQ packing, EXL2/3, ONNX QDQ, TFLite

**Frameworks & Kernels**

`38` [PyTorch Quantization](https://karam-nus.github.io/quantization/38_pytorch_quantization) · eager → FX → PT2E, observers, qconfig, custom observers  
`39` [Vendor & Edge Toolchains](https://karam-nus.github.io/quantization/39_deployment_toolchains) · TensorRT, ONNX Runtime, OpenVINO/NNCF, TFLite, QNN/SNPE/AIMET  
`40` [Serving Stacks](https://karam-nus.github.io/quantization/40_llm_serving_stacks) · vLLM, SGLang, TensorRT-LLM, llama.cpp, ExLlamaV2, MLC, TGI  
`41` [How a Quantized Matmul Runs](https://karam-nus.github.io/quantization/41_quantized_kernels) · dp4a, integer tensor cores, Marlin/Machete, dequant-fused GEMV

**Practice**

`42` [Hands-On: Quantizing a CNN](https://karam-nus.github.io/quantization/42_handson_cnn_ptq) · calibrators from scratch, per-channel weights, SQNR  
`43` [Hands-On: Export & Deploy](https://karam-nus.github.io/quantization/43_handson_export_and_deploy) · PT2E → ONNX QDQ → ONNX Runtime and TensorRT INT8  
`44` [Hands-On: QAT From Scratch](https://karam-nus.github.io/quantization/44_handson_qat) · an STE autograd function and an LSQ quantizer written by hand  
`45` [Hands-On: Quantizing an LLM](https://karam-nus.github.io/quantization/45_handson_llm) · GPTQ, AWQ, SmoothQuant, FP8 on one model, served on vLLM  
`46` [Hands-On: GGUF End to End](https://karam-nus.github.io/quantization/46_handson_gguf) · convert → imatrix → quantize → perplexity + bench  
`47` [The Debugging Playbook](https://karam-nus.github.io/quantization/47_debugging_playbook) · symptom → cause → fix, per-layer SQNR bisection, sensitivity sweeps  
`48` [Evaluating Honestly](https://karam-nus.github.io/quantization/48_evaluating_quantized_models) · KL-divergence vs perplexity, latency/TTFT/energy, the memory formula  
`49` [The Decision Guide](https://karam-nus.github.io/quantization/49_decision_guide) · flowcharts by starting point, each ending in a concrete recipe

**Appendices**

`A` [Glossary & Symbols](https://karam-nus.github.io/quantization/appendix_a_glossary) · every term and symbol, one canonical definition each  
`B` [Math Reference](https://karam-nus.github.io/quantization/appendix_b_math) · MSE-optimal scale, optimal clipping, KL objective, OBS update  
`C` [Method Index](https://karam-nus.github.io/quantization/appendix_c_method_index) · every method × year × bits × granularity × hardware × tooling  
`D` [Hardware Capability Matrix](https://karam-nus.github.io/quantization/appendix_d_hardware_matrix) · accelerator × precisions × granularity limits × toolchain  
`E` [Bibliography](https://karam-nus.github.io/quantization/appendix_e_bibliography) · full reading list by theme, with a suggested order

</details>

<details>
<summary><kbd>INFERENCE</kbd> &nbsp;·&nbsp; 12 chapters &nbsp;<a href="https://karam-nus.github.io/inference/">↗</a></summary>
<br>

From quantized model to production — the complete deployment guide for AI research scientists.

`01` [Grand Overview](https://karam-nus.github.io/inference/01_grand_overview) · full stack: PyTorch model → hardware execution  
`02` [Glossary & Concept Map](https://karam-nus.github.io/inference/02_glossary_and_concept_map) · every term defined + visual relationship maps  
`03` [Inference Engines Deep Dive](https://karam-nus.github.io/inference/03_inference_engines) · vLLM, SGLang, llama.cpp, TensorRT-LLM — compared  
`04` [Runtimes & Backends](https://karam-nus.github.io/inference/04_runtimes_and_backends) · ONNX Runtime, CUDA, ROCm, OpenVINO, ExecuTorch  
`05` [Hardware Landscape](https://karam-nus.github.io/inference/05_hardware_landscape) · NVIDIA, AMD, Intel, TPUs, NPUs, custom ASICs  
`06` [Quantization to Deployment Bridge](https://karam-nus.github.io/inference/06_quantization_to_deployment) · how your quantized model gets deployed end-to-end  
`07` [Company Landscape](https://karam-nus.github.io/inference/07_company_landscape) · NVIDIA, Renesas, Synopsys, Qualcomm  
`08` [Model Formats & Serialization](https://karam-nus.github.io/inference/08_model_formats) · GGUF, ONNX, SafeTensors, TorchScript  
`09` [Serving Infrastructure & Middleware](https://karam-nus.github.io/inference/09_serving_and_middleware) · Triton, KServe, API gateways, load balancers  
`10` [Edge & Embedded Deployment](https://karam-nus.github.io/inference/10_edge_and_embedded) · TFLite, ExecuTorch, microcontrollers, Renesas MCUs  
`11` [Compiler Stack](https://karam-nus.github.io/inference/11_compiler_stack) · TVM, XLA, Triton compiler, MLIR  
`12` [Practical Code Guide](https://karam-nus.github.io/inference/12_practical_code_guide) · PyTorch → quantize → export → deploy → serve

</details>

<details>
<summary><kbd>VECTORIZATION</kbd> &nbsp;·&nbsp; 24 chapters + 6 appendices &nbsp;<a href="https://karam-nus.github.io/vectorization/">↗</a></summary>
<br>

From one lane to ten thousand — reshaping computation to run many-at-once in NumPy, compilers, CUDA kernels and silicon.

**Orientation**

`00` [Why Think About Vectorization?](https://karam-nus.github.io/vectorization/00_why_vectorization) · unused lanes (14.4×), energy spent deciding, interpreter overhead (834×)  
`01` [The Whole Field on One Page](https://karam-nus.github.io/vectorization/01_grand_overview) · vectorization stack as a building, the six questions  
`02` [A Field Guide to Vectorizable Workloads](https://karam-nus.github.io/vectorization/02_domains) · ten loop species across 14 domains, batching across instances

**The Mental Model**

`03` [Lanes, Registers & the SIMD Contract](https://karam-nus.github.io/vectorization/03_lanes_and_registers) · V = w/e, the four promises of SIMD, eight instruction families  
`04` [Seeing Vectors: A Visual Grammar](https://karam-nus.github.io/vectorization/04_seeing_vectors) · seven drawings, from register strips to rooflines  
`05` [From Cray-1 to Tensor Cores](https://karam-nus.github.io/vectorization/05_history) · fifty years of vector machines and the arguments that recur

**Legality & Profitability**

`06` [Dependences & Aliasing](https://karam-nus.github.io/vectorization/06_dependences) · d ≤ 0 or d ≥ V rule, aliasing, NumPy's copy semantics  
`07` [Memory Is the Real Vector](https://karam-nus.github.io/vectorization/07_memory_layout) · cache lines, stride, AoS vs SoA, tensor layouts, coalescing  
`08` [Masks, Predication, Divergence & Tails](https://karam-nus.github.io/vectorization/08_control_flow) · if-conversion, safe speculation, masking across ISAs  
`09` [Is It Worth It? Roofline, Amdahl & Real Ceilings](https://karam-nus.github.io/vectorization/09_profitability) · a measured roofline, the scalar ridge point, Amdahl, latency chains

**The Toolbox**

`10` [The Technique Catalogue](https://karam-nus.github.io/vectorization/10_technique_catalogue) · 44 techniques as a periodic table, parallel scan, histograms  
`11` [Array Programming: NumPy, PyTorch & einsum](https://karam-nus.github.io/vectorization/11_array_programming) · per-call cost model, np.vectorize exposed, broadcasting, einsum  
`12` [Automatic Batching: vmap, jit & Friends](https://karam-nus.github.io/vectorization/12_vmap) · batching rules on real jaxprs, GEMV → GEMM, what vmap cannot batch  
`13` [Compiler Auto-Vectorization](https://karam-nus.github.io/vectorization/13_auto_vectorization) · vectorizer's six steps, real gcc/clang remarks  
`14` [Explicit SIMD: Intrinsics, Libraries & SPMD](https://karam-nus.github.io/vectorization/14_explicit_simd) · intrinsics, measured accumulators, SVE, RISC-V V, Highway, ISPC

**Accelerators & Silicon**

`15` [GPUs: SIMT, Warps & Tiles](https://karam-nus.github.io/vectorization/15_gpus_simt) · warps as vectors, coalescing, shuffles, tensor cores, Triton  
`16` [Matrix Engines: Systolic Arrays, Tensor Cores, AMX & SME](https://karam-nus.github.io/vectorization/16_matrix_engines) · operand reuse, systolic dataflows, AMX measured at 13× AVX-512  
`17` [The Architect's View: Designing Vector Hardware](https://karam-nus.github.io/vectorization/17_architects_view) · what grows with width, length-agnostic ISAs, datatypes as area

**ML Systems**

`18` [Vectorizing ML Kernels](https://karam-nus.github.io/vectorization/18_ml_kernels) · vectorized exp, online softmax, Welford, GEMM microkernel, FlashAttention  
`19` [Batching: Vectorization at System Scale](https://karam-nus.github.io/vectorization/19_batching_systems) · batch size is arithmetic intensity, continuous batching

**Practice & Thinking**

`20` [Hands-On: One Kernel, Eight Rungs](https://karam-nus.github.io/vectorization/20_handson_ladder) · pairwise distances from Python to AVX-512, measured  
`21` [The Debugging & Profiling Playbook](https://karam-nus.github.io/vectorization/21_debugging_playbook) · four symptoms, triage tables, a profiler-free "did it vectorize?" check  
`22` [Questions Worth Pondering & The Decision Guide](https://karam-nus.github.io/vectorization/22_questions_worth_pondering) · forty questions on seven cork boards, first moves by starting point  
`23` [Where to Go Next](https://karam-nus.github.io/vectorization/23_where_next) · a metro map into quantization, compilers, GPUs, silicon, serving

**Interactive**

`LAB` [Interactive Labs](https://karam-nus.github.io/vectorization/labs) · all ten labs on one page  
`MAP` [Vector ISA Atlas](https://karam-nus.github.io/vectorization/atlas) · every vector ISA and matrix engine from the Cray-1 to Ironwood

**Appendices**

`A` [Glossary & Symbols](https://karam-nus.github.io/vectorization/appendix_a_glossary) · every term and symbol, one definition each  
`B` [Math Reference](https://karam-nus.github.io/vectorization/appendix_b_math) · every formula with its numerical check  
`C` [Technique Index](https://karam-nus.github.io/vectorization/appendix_c_technique_index) · 44 techniques × legality × payoff × failure mode  
`D` [Hardware Matrix](https://karam-nus.github.io/vectorization/appendix_d_hardware_matrix) · ISA × width × masking × gather × ML types  
`E` [Bibliography](https://karam-nus.github.io/vectorization/appendix_e_bibliography) · reading list by theme, with a suggested order  
`F` [Question Bank](https://karam-nus.github.io/vectorization/appendix_f_question_bank) · sixty self-test and interview questions keyed to chapters

</details>

<details>
<summary><kbd>CHIPS</kbd> &nbsp;·&nbsp; 35 chapters + 8 appendices &nbsp;<a href="https://karam-nus.github.io/chips/">↗</a></summary>
<br>

From sand to supercomputers — chip design and architecture, and the hardware reasons behind every quantization and sparsity decision.

**Foundations**

`01` [What Is a Chip?](https://karam-nus.github.io/chips/01_what_is_a_chip) · sand → silicon → transistors, the MOSFET, doping, Moore's Law  
`02` [Transistors to Logic](https://karam-nus.github.io/chips/02_transistors_to_logic) · boolean algebra, gates, combinational vs sequential logic  
`03` [Number Representation](https://karam-nus.github.io/chips/03_number_representation) · binary, two's complement, fixed vs floating point, IEEE-754  
`04` [Anatomy of a Processor](https://karam-nus.github.io/chips/04_anatomy_of_a_processor) · von Neumann vs Harvard, fetch-decode-execute, datapath  
`05` [Instruction Sets](https://karam-nus.github.io/chips/05_instruction_sets) · ISA vs microarchitecture, RISC vs CISC, x86/ARM/RISC-V  
`06` [Languages & Nomenclature](https://karam-nus.github.io/chips/06_languages_and_nomenclature) · bare metal, firmware, microcode, assembly, Verilog/VHDL/RTL, HLS  
`07` [Types of Chips (Taxonomy)](https://karam-nus.github.io/chips/07_types_of_chips_taxonomy) · CPU/GPU/TPU/NPU/DSP/ISP/FPGA/ASIC/SoC/MCU in one comparison

**Parallelism, Memory & Movement**

`08` [Parallel Processing](https://karam-nus.github.io/chips/08_parallel_processing) · ILP, superscalar, SIMD/SIMT, multicore, Flynn's taxonomy  
`09` [Memory Types](https://karam-nus.github.io/chips/09_memory_types) · registers, SRAM, DRAM, DDR/GDDR/HBM, NAND, the hierarchy  
`10` [Memory Management](https://karam-nus.github.io/chips/10_memory_management) · virtual memory, paging, MMU/TLB, cache coherence (MESI), NUMA  
`11` [Memory Wall & Bandwidth](https://karam-nus.github.io/chips/11_memory_wall_and_bandwidth) · roofline, arithmetic intensity — why bandwidth, not FLOPs, bounds ML  
`12` [Buses & Interconnects](https://karam-nus.github.io/chips/12_buses_and_interconnects) · on-chip (NoC, AXI) vs off-chip (PCIe, CXL, NVLink, UALink)  
`13` [Reliability & Fault Tolerance](https://karam-nus.github.io/chips/13_reliability_and_fault_tolerance) · ECC, RAS, soft errors, silent data corruption, redundancy

**The Chips Themselves**

`14` [CPUs](https://karam-nus.github.io/chips/14_cpus) · out-of-order superscalar cores, branch prediction, caches  
`15` [GPUs](https://karam-nus.github.io/chips/15_gpus) · SIMT, SMs, warps, tensor cores — why GPUs won ML  
`16` [TPUs & Systolic Arrays](https://karam-nus.github.io/chips/16_tpus_and_systolic_arrays) · systolic arrays, matrix units, dataflow, Google TPU v1 → Trillium  
`17` [NPUs & Edge AI](https://karam-nus.github.io/chips/17_npus_and_edge_ai) · mobile/edge NPUs, Apple Neural Engine, Qualcomm Hexagon  
`18` [DSPs](https://karam-nus.github.io/chips/18_dsps) · MAC units, VLIW, signal-processing pipelines  
`19` [ISPs](https://karam-nus.github.io/chips/19_isps) · image signal processors, the camera pipeline, their place in SoCs  
`20` [FPGAs](https://karam-nus.github.io/chips/20_fpgas) · LUTs, reconfigurable fabric, when/why FPGAs, AI on FPGA  
`21` [ASICs](https://karam-nus.github.io/chips/21_asics) · the FPGA→ASIC spectrum, NRE/full-custom, the AI-ASIC boom  
`22` [SoCs](https://karam-nus.github.io/chips/22_socs) · integration, chiplets, heterogeneous compute, Apple M-series

**Datatypes**

`23` [Number Formats Deep Dive](https://karam-nus.github.io/chips/23_number_formats_deep_dive) · FP32→FP4, INT8→INT1, bit layouts, microscaling (MXFP, NVFP4)  
`24` [Datatypes & Silicon](https://karam-nus.github.io/chips/24_datatypes_and_silicon) · how a format reshapes the multiplier and tensor core, per-gen support

**HW ↔ Model Co-Design**

`25` [Quantization (Hardware View)](https://karam-nus.github.io/chips/25_quantization_hardware_view) · how low precision saves area/power/bandwidth, and where it breaks  
`26` [Sparsity (Hardware View)](https://karam-nus.github.io/chips/26_sparsity_hardware_view) · structured 2:4 sparsity, sparse tensor cores, how much it really helps

**From Hardware to Usage**

`27` [Why GPUs Won AI](https://karam-nus.github.io/chips/27_why_gpus_won_ai) · how GPU parallelism maps to neural-net math, matmul as the workhorse  
`28` [Multi-GPU & Distributed Training](https://karam-nus.github.io/chips/28_multi_gpu_and_distributed_training) · data/tensor/pipeline/expert parallelism, FSDP, ZeRO — why 70B won’t fit  
`29` [Memory Hierarchy in Action](https://karam-nus.github.io/chips/29_memory_hierarchy_in_action) · how HW memory limits drive KV-cache, batching, activation memory  
`30` [Datatypes Drive Optimization](https://karam-nus.github.io/chips/30_datatypes_drive_optimization_choices) · decision framework: when INT8, when FP8, when 2:4 sparsity

**Design & Verification**

`31` [Chip Design Flow](https://karam-nus.github.io/chips/31_chip_design_flow) · spec → RTL → synthesis → place & route → timing → DRC/LVS → tapeout  
`32` [Verification & Validation](https://karam-nus.github.io/chips/32_chip_verification_and_validation) · simulation, UVM, assertions, formal, coverage, DFT, emulation

**The Industry**

`33` [Design-Paradigm Wars](https://karam-nus.github.io/chips/33_design_paradigm_wars) · NVIDIA vs AMD vs Intel vs ARM design philosophies  
`34` [Generational Improvements](https://karam-nus.github.io/chips/34_generational_improvements) · process nodes, bandwidth growth, family histories year over year  
`35` [Where the Industry Is Headed](https://karam-nus.github.io/chips/35_where_the_industry_is_headed) · chiplets, 3D stacking, CXL pooling, co-packaged optics, in-memory compute

**Appendices**

`A` [How Chips Are Made](https://karam-nus.github.io/chips/appendix_a_how_chips_are_made) · sand → wafer → fab → EUV lithography → etch/doping → packaging → test  
`B` [Foundry Ecosystem](https://karam-nus.github.io/chips/appendix_b_foundry_ecosystem) · TSMC/Samsung/Intel, the fabless model, EDA tools, IP cores  
`C` [Photonics](https://karam-nus.github.io/chips/appendix_c_photonics) · silicon photonics, co-packaged optics, optical compute  
`D` [Power & Thermals](https://karam-nus.github.io/chips/appendix_d_power_and_thermals) · power delivery, DVFS, cooling, performance-per-watt  
`E` [Packaging & Integration](https://karam-nus.github.io/chips/appendix_e_packaging) · 2.5D/3D, CoWoS, interposers, HBM stacking, chiplets/UCIe  
`F` [Glossary](https://karam-nus.github.io/chips/appendix_f_glossary) · every acronym and term in one place  
`G` [Resources](https://karam-nus.github.io/chips/appendix_g_resources) · books, courses, channels, blogs, papers, podcasts  
`H` [The Life of a Running Computer](https://karam-nus.github.io/chips/appendix_h_how_a_computer_runs) · power-on, interrupts, the scheduler, what "idle" really is

</details>

<details>
<summary><kbd>NVIDIA</kbd> &nbsp;·&nbsp; 13 chapters + 2 appendices · 2 planned &nbsp;<a href="https://karam-nus.github.io/nvidia/">↗</a></summary>
<br>

From silicon to supercomputers — GPU architecture, CUDA, data centers and the accelerated-computing ecosystem.

**Foundations**

`01` [GPU Fundamentals](https://karam-nus.github.io/nvidia/01_gpu_fundamentals) · CPU vs GPU, data types, memory hierarchy, roofline model  
`02` [GPU Microarchitecture](https://karam-nus.github.io/nvidia/02_gpu_microarchitecture) · Streaming Multiprocessors, Tensor Cores, warp execution  
`03` [CUDA Programming](https://karam-nus.github.io/nvidia/03_cuda_programming) · kernels, memory management, streams, Python bindings

**Software Stack**

`04` [NVIDIA Libraries](https://karam-nus.github.io/nvidia/04_nvidia_libraries) · cuBLAS, cuDNN, NCCL, CUTLASS, cuSPARSE  
`05` [Optimization Stack](https://karam-nus.github.io/nvidia/05_optimization_stack) · TensorRT, TensorRT-LLM, ModelOpt, Triton Inference Server  
`06` [NVIDIA Models](https://karam-nus.github.io/nvidia/06_nvidia_models) · Nemotron, Alpamayo, NeMo, ASR/TTS, NIM microservices

**Scaling**

`07` [Parallelism on GPUs](https://karam-nus.github.io/nvidia/07_parallelism) · data, tensor, pipeline, expert parallelism, ZeRO  
`08` [GPU Generations](https://karam-nus.github.io/nvidia/08_gpu_generations) · GeForce 30→50, H100, H200, B200 — features & VRAM  
`09` [NVIDIA CPUs](https://karam-nus.github.io/nvidia/09_nvidia_cpus) · Grace CPU, Grace Hopper Superchip, ARM in data center

**Infrastructure & Economics**

`10` [Multi-GPU Interconnects](https://karam-nus.github.io/nvidia/10_multi_gpu_interconnects) · NVLink, NVSwitch, PCIe, InfiniBand  
`11` [Data Center Architectures](https://karam-nus.github.io/nvidia/11_data_center_architectures) · DGX, HGX, SuperPOD, DGX Cloud, full rack design  
`12` [GPU Economics & Tokenomics](https://karam-nus.github.io/nvidia/12_gpu_economics) · cost per token, TCO analysis, cloud vs on-prem  
`13` [ASICs & GPU Competitors](https://karam-nus.github.io/nvidia/13_asics_and_competitors) · Cerebras, Groq, Google TPU, Intel Gaudi

**Appendices**

`A` Company History & Timeline *(planned)* · from a Denny’s booth (1993) to $3T market cap  
`B` Future Roadmap *(planned)* · Rubin, Vera, photonic interconnects, quantum

</details>

---

### Evaluation

<details>
<summary><kbd>EVALS</kbd> &nbsp;·&nbsp; 4 benchmarks &nbsp;<a href="https://karam-nus.github.io/evals/">↗</a></summary>
<br>

From perplexity to multimodal — the math, datasets, code and caveats of every major LLM/VLM benchmark.

`01` [Wikitext Perplexity](https://karam-nus.github.io/evals/01_wikitext_perplexity) · language modelling quality, training progress, regression detection  
`02` [MMLU](https://karam-nus.github.io/evals/02_mmlu) · broad academic knowledge across 57 subjects  
`03` [MMMU](https://karam-nus.github.io/evals/03_mmmu) · college-level multimodal understanding across 30 subjects  
`04` [RealWorldQA](https://karam-nus.github.io/evals/04_realworldqa) · real-world spatial and visual understanding from photos

</details>

<details>
<summary><kbd>METRICS</kbd> &nbsp;·&nbsp; 48 metrics across 6 domains · 10 planned &nbsp;<a href="https://karam-nus.github.io/metrics/">↗</a></summary>
<br>

Debug model internals. Select the right metric. Understand what each metric reveals — and where it breaks.

**Tensor Comparison & Numerical Debugging** · [`Cosine Similarity`](https://karam-nus.github.io/metrics/docs/metrics/tensor-comparison/cosine_similarity) [`RMSE`](https://karam-nus.github.io/metrics/docs/metrics/tensor-comparison/rmse) [`RRMSE`](https://karam-nus.github.io/metrics/docs/metrics/tensor-comparison/rrmse) [`MAE`](https://karam-nus.github.io/metrics/docs/metrics/tensor-comparison/mae) [`torch.allclose`](https://karam-nus.github.io/metrics/docs/metrics/tensor-comparison/allclose) [`SNR`](https://karam-nus.github.io/metrics/docs/metrics/tensor-comparison/snr) [`SQNR`](https://karam-nus.github.io/metrics/docs/metrics/tensor-comparison/sqnr) [`KL Divergence`](https://karam-nus.github.io/metrics/docs/metrics/tensor-comparison/kl_divergence) [`L1/L2 Norm Diff`](https://karam-nus.github.io/metrics/docs/metrics/tensor-comparison/norm_difference) [`Max Absolute Error`](https://karam-nus.github.io/metrics/docs/metrics/tensor-comparison/max_absolute_error) [`Pearson/Spearman`](https://karam-nus.github.io/metrics/docs/metrics/tensor-comparison/correlation)

**General Regression** · [`MSE`](https://karam-nus.github.io/metrics/docs/metrics/regression/mse) [`RMSE`](https://karam-nus.github.io/metrics/docs/metrics/regression/rmse) [`MAE`](https://karam-nus.github.io/metrics/docs/metrics/regression/mae) [`MAPE`](https://karam-nus.github.io/metrics/docs/metrics/regression/mape) [`R²`](https://karam-nus.github.io/metrics/docs/metrics/regression/r_squared) [`Huber Loss`](https://karam-nus.github.io/metrics/docs/metrics/regression/huber_loss) [`SMAPE`](https://karam-nus.github.io/metrics/docs/metrics/regression/smape)

**Classification** · [`Accuracy`](https://karam-nus.github.io/metrics/docs/metrics/classification/accuracy) [`Precision`](https://karam-nus.github.io/metrics/docs/metrics/classification/precision) [`Recall`](https://karam-nus.github.io/metrics/docs/metrics/classification/recall) [`F1`](https://karam-nus.github.io/metrics/docs/metrics/classification/f1_score) [`ROC-AUC`](https://karam-nus.github.io/metrics/docs/metrics/classification/roc_auc) [`PR-AUC`](https://karam-nus.github.io/metrics/docs/metrics/classification/pr_auc) [`MCC`](https://karam-nus.github.io/metrics/docs/metrics/classification/mcc) [`Cohen’s Kappa`](https://karam-nus.github.io/metrics/docs/metrics/classification/cohens_kappa) [`Specificity`](https://karam-nus.github.io/metrics/docs/metrics/classification/specificity) [`Top-K Accuracy`](https://karam-nus.github.io/metrics/docs/metrics/classification/top_k_accuracy)

**Object Detection** · [`mAP`](https://karam-nus.github.io/metrics/docs/metrics/object-detection/map) [`Average Recall`](https://karam-nus.github.io/metrics/docs/metrics/object-detection/average_recall) [`IoU`](https://karam-nus.github.io/metrics/docs/metrics/object-detection/iou) [`GIoU`](https://karam-nus.github.io/metrics/docs/metrics/object-detection/giou) [`DIoU`](https://karam-nus.github.io/metrics/docs/metrics/object-detection/diou) [`CIoU`](https://karam-nus.github.io/metrics/docs/metrics/object-detection/ciou)

**Segmentation** · [`Dice`](https://karam-nus.github.io/metrics/docs/metrics/segmentation/dice) [`IoU (Jaccard)`](https://karam-nus.github.io/metrics/docs/metrics/segmentation/iou) [`Pixel Accuracy`](https://karam-nus.github.io/metrics/docs/metrics/segmentation/pixel_accuracy) [`Boundary F1`](https://karam-nus.github.io/metrics/docs/metrics/segmentation/boundary_f1)

**Generative & Distribution Quality** · [`FID`](https://karam-nus.github.io/metrics/docs/metrics/generative/fid) [`Inception Score`](https://karam-nus.github.io/metrics/docs/metrics/generative/inception_score) [`LPIPS`](https://karam-nus.github.io/metrics/docs/metrics/generative/lpips) [`SSIM`](https://karam-nus.github.io/metrics/docs/metrics/generative/ssim) [`PSNR`](https://karam-nus.github.io/metrics/docs/metrics/generative/psnr) [`BLEU`](https://karam-nus.github.io/metrics/docs/metrics/generative/bleu) [`ROUGE`](https://karam-nus.github.io/metrics/docs/metrics/generative/rouge) [`METEOR`](https://karam-nus.github.io/metrics/docs/metrics/generative/meteor) [`CIDEr`](https://karam-nus.github.io/metrics/docs/metrics/generative/cider) [`BERTScore`](https://karam-nus.github.io/metrics/docs/metrics/generative/bertscore)

**Ranking & Retrieval** *(planned)* · `NDCG` `MRR` `Precision@K` `Recall@K` `MAP@K`

**Calibration & Uncertainty** *(planned)* · `ECE` `MCE` `Brier Score` `NLL` `Reliability Diagrams`

</details>

---

### Engineering

<details>
<summary><kbd>PROGRAMMING</kbd> &nbsp;·&nbsp; 24 chapters + 5 appendices &nbsp;<a href="https://karam-nus.github.io/programming/">↗</a></summary>
<br>

From bytecode to dynamic programming — how Python really executes, code that writes code, and the algorithms that recur in real work.

**Orientation**

`00` [The Whole Subject on One Page](https://karam-nus.github.io/programming/00_grand_overview) · execution, expression, technique — programs and solutions are data

**How Python Executes**

`01` [From Source to Bytecode](https://karam-nus.github.io/programming/01_from_source_to_bytecode) · tokens → PEG parser → AST → symtable → bytecode → the evaluation loop  
`02` [Objects, Names & Memory](https://karam-nus.github.io/programming/02_objects_names_and_memory) · names are bindings, aliasing, is vs ==, refcounting  
`03` [Scope, Closures & Binding](https://karam-nus.github.io/programming/03_scope_closures_and_binding) · LEGB decided at compile time, UnboundLocalError, cells, nonlocal  
`04` [The Data Model & Attribute Lookup](https://karam-nus.github.io/programming/04_the_data_model_and_attribute_lookup) · the exact obj.attr algorithm, C3 linearization, super(), hashing  
`05` [Iterators, Generators & Coroutines](https://karam-nus.github.io/programming/05_iterators_generators_and_coroutines) · for desugared, generators as suspended frames, send/yield from

**Paradigms**

`06` [Functional Programming](https://karam-nus.github.io/programming/06_functional_programming) · purity, higher-order functions, functools, immutability  
`07` [Types & Static Typing](https://karam-nus.github.io/programming/07_types_and_static_typing) · gradual, nominal vs structural, PEP 695 generics, variance derived  
`08` [Concurrency & Parallelism](https://karam-nus.github.io/programming/08_concurrency_and_parallelism) · what the GIL protects, threads vs processes, asyncio, free-threading

**Metaprogramming**

`09` [Decorators](https://karam-nus.github.io/programming/09_decorators) · the metaprogramming ladder, wraps, factories, ParamSpec typing  
`10` [Descriptors](https://karam-nus.github.io/programming/10_descriptors) · how methods bind, property/classmethod rebuilt, __set_name__  
`11` [Metaclasses & Class Creation](https://karam-nus.github.io/programming/11_metaclasses_and_class_creation) · class statement desugared, __prepare__, __init_subclass__ first  
`12` [Introspection, AST & Code Generation](https://karam-nus.github.io/programming/12_introspection_ast_and_codegen) · inspect, AST transforms, exec scoping, import hooks

**Algorithmic Techniques**

`13` [Complexity & Cost Models](https://karam-nus.github.io/programming/13_complexity_and_cost_models) · asymptotics done right, amortized analysis, a measured cost model  
`14` [Recursion & Divide and Conquer](https://karam-nus.github.io/programming/14_recursion_and_divide_and_conquer) · recursion as induction, the master theorem, merge sort  
`15` [Dynamic Programming I — Foundations](https://karam-nus.github.io/programming/15_dynamic_programming_foundations) · seven-field DP recipe, memoization vs tabulation, coin change  
`16` [Dynamic Programming II — Patterns](https://karam-nus.github.io/programming/16_dynamic_programming_patterns) · interval, LIS in O(n log n), edit distance, bitmask; Viterbi, CTC, DTW  
`17` [Greedy Algorithms](https://karam-nus.github.io/programming/17_greedy_algorithms) · greedy-choice property, exchange arguments, interval scheduling  
`18` [Graph Algorithms](https://karam-nus.github.io/programming/18_graph_algorithms) · BFS/DFS, topological sort, Dijkstra, Bellman–Ford, union-find, MST  
`19` [Data Structure Internals](https://karam-nus.github.io/programming/19_data_structure_internals) · CPython's list, dict, set, deque, heapq from the source  
`20` [Bit Manipulation](https://karam-nus.github.io/programming/20_bit_manipulation) · two’s complement, lowbit tricks, subset enumeration, IEEE-754

**Performance**

`21` [Profiling & Optimization](https://karam-nus.github.io/programming/21_profiling_and_optimization) · timeit, cProfile, sampling profilers, tracemalloc  
`22` [Beyond Python](https://karam-nus.github.io/programming/22_beyond_python) · ctypes, Cython, Numba, mypyc, pybind11/nanobind, PyO3

**Synthesis**

`23` [The Problem-Solving Playbook](https://karam-nus.github.io/programming/23_problem_solving_playbook) · from constraints to technique, brute → memo → table → optimize

**Appendices**

`A` [Glossary](https://karam-nus.github.io/programming/appendix_a_glossary) · every term, one canonical definition  
`B` [Complexity Reference](https://karam-nus.github.io/programming/appendix_b_complexity_reference) · cost of every built-in operation used in the book  
`C` [DP Catalogue](https://karam-nus.github.io/programming/appendix_c_dp_catalogue) · every DP problem: state, transition, complexity, chapter  
`D` [Python Version Matrix](https://karam-nus.github.io/programming/appendix_d_python_versions) · every version-gated feature, 3.8 → 3.15  
`E` [Bibliography](https://karam-nus.github.io/programming/appendix_e_bibliography) · books, PEPs, source files, and a reading order

</details>

<details>
<summary><kbd>DESIGN PATTERNS</kbd> &nbsp;·&nbsp; 39 chapters + 3 appendices &nbsp;<a href="https://karam-nus.github.io/design-patterns/">↗</a></summary>
<br>

From principles to production — GoF classics, Pythonic idioms, PyTorch patterns, MLOps architecture and agentic AI patterns.

**Foundations**

`01` [Introduction to Design Patterns](https://karam-nus.github.io/design-patterns/01_introduction) · what patterns are, GoF history, the taxonomy applied to ML and AI  
`02` [SOLID Principles in Python](https://karam-nus.github.io/design-patterns/02_solid_principles) · all five SOLID principles with ML-specific examples  
`03` [Python Idioms & Protocols as Patterns](https://karam-nus.github.io/design-patterns/03_python_idioms) · context managers, descriptors, generators, ABCs, typing.Protocol

**Creational Patterns**

`04` [Factory & Abstract Factory](https://karam-nus.github.io/design-patterns/04_factory) · model factories, loss factories, dataset factories  
`05` [Builder Pattern](https://karam-nus.github.io/design-patterns/05_builder) · training-pipeline and config builders, step-by-step assembly  
`06` [Singleton, Borg & Registry](https://karam-nus.github.io/design-patterns/06_registry) · config registry, model registry, service locator, plugin system  
`07` [Prototype & Object Pool](https://karam-nus.github.io/design-patterns/07_prototype) · pretrained weight init, model cloning, GPU memory pools  
`08` [Dependency Injection](https://karam-nus.github.io/design-patterns/08_dependency_injection) · inversion of control, constructor injection, modular ML wiring

**Structural Patterns**

`09` [Composite & Module Hierarchy](https://karam-nus.github.io/design-patterns/09_composite) · nn.Module as a composite tree, recursive forward()  
`10` [Adapter & Bridge](https://karam-nus.github.io/design-patterns/10_adapter_bridge) · framework bridges (HuggingFace ↔ PyTorch), data format adapters  
`11` [Decorator & Wrapper](https://karam-nus.github.io/design-patterns/11_decorator) · augmentation wrappers, timing, caching, model instrumentation  
`12` [Facade & Service Layer](https://karam-nus.github.io/design-patterns/12_facade) · high-level training APIs, HuggingFace Trainer, Pipeline  
`13` [Proxy & Lazy Loading](https://karam-nus.github.io/design-patterns/13_proxy) · remote model proxies, lazy tensor loading, virtual proxies  
`14` [Flyweight & Parameter Sharing](https://karam-nus.github.io/design-patterns/14_flyweight) · shared embedding tables, weight tying (input/output embeddings)

**Behavioral Patterns**

`15` [Strategy Pattern](https://karam-nus.github.io/design-patterns/15_strategy) · interchangeable loss functions, optimizers, samplers  
`16` [Observer, Callback & Event System](https://karam-nus.github.io/design-patterns/16_observer) · training callbacks, PyTorch hooks, early stopping, logging  
`17` [Template Method & Training Loop](https://karam-nus.github.io/design-patterns/17_template_method) · skeleton training loops, Lightning’s training_step, Trainer  
`18` [Chain of Responsibility & Transform Pipelines](https://karam-nus.github.io/design-patterns/18_chain) · torchvision.transforms.Compose, preprocessing chains  
`19` [Command & Job Scheduler](https://karam-nus.github.io/design-patterns/19_command) · experiment queuing, task encapsulation, reproducible dispatch  
`20` [State Machine & Lifecycle](https://karam-nus.github.io/design-patterns/20_state) · model lifecycle (init → training → eval → serving)  
`21` [Iterator, Generator & Lazy Datasets](https://karam-nus.github.io/design-patterns/21_iterator) · DataLoader internals, IterableDataset, streaming datasets  
`22` [Visitor & Graph Traversal](https://karam-nus.github.io/design-patterns/22_visitor) · model introspection, FLOPs counting, ONNX export, pruning masks

**PyTorch Design Patterns**

`23` [nn.Module Composition Patterns](https://karam-nus.github.io/design-patterns/23_module_composition) · Sequential, ModuleList, ModuleDict, skip connections, multi-head outputs  
`24` [Hook Pattern](https://karam-nus.github.io/design-patterns/24_hooks) · forward/backward hooks, activation extraction, gradient analysis  
`25` [Custom Training Components](https://karam-nus.github.io/design-patterns/25_custom_components) · custom losses, optimizers, LR schedulers, samplers, collate fns  
`26` [Checkpoint & Serialization](https://karam-nus.github.io/design-patterns/26_checkpoint) · state_dict save/load, safetensors, versioning strategies  
`27` [Distributed & Parallel Patterns](https://karam-nus.github.io/design-patterns/27_distributed) · DDP, FSDP, pipeline parallelism, tensor parallelism, ZeRO stages

**ML Pipeline & MLOps Patterns**

`28` [Data Pipeline & DAG Patterns](https://karam-nus.github.io/design-patterns/28_data_pipeline) · Kedro, Airflow, Prefect, Metaflow, DAG composition, data lineage  
`29` [Configuration Management Pattern](https://karam-nus.github.io/design-patterns/29_configuration) · Hydra, OmegaConf, YAML hierarchies, structured configs  
`30` [Experiment Tracking & Reproducibility](https://karam-nus.github.io/design-patterns/30_experiment_tracking) · MLflow, W&B, run management, artifact versioning, lineage graphs  
`31` [Model Serving Patterns](https://karam-nus.github.io/design-patterns/31_serving) · REST/gRPC serving, batch vs online inference, shadow deployment  
`32` [Resilience Patterns for ML](https://karam-nus.github.io/design-patterns/32_resilience) · circuit breaker, bulkhead, retry with backoff, fallback models

**Agentic & LLM Design Patterns**

`33` [ReAct & Chain-of-Thought](https://karam-nus.github.io/design-patterns/33_react) · observe-think-act loop, scratchpad reasoning, self-correction  
`34` [Router & Dispatcher Pattern](https://karam-nus.github.io/design-patterns/34_router) · LLM routing, multi-model switching, intent classification  
`35` [Orchestrator-Worker Pattern](https://karam-nus.github.io/design-patterns/35_orchestrator_worker) · task delegation, parallel sub-agents, result aggregation  
`36` [Evaluator-Optimizer Pattern](https://karam-nus.github.io/design-patterns/36_evaluator_optimizer) · self-reflection loops, quality scoring, auto-refinement  
`37` [RAG & Retrieval Patterns](https://karam-nus.github.io/design-patterns/37_rag) · dense/hybrid retrieval, reranking, context compression, self-RAG  
`38` [Multi-Agent Communication](https://karam-nus.github.io/design-patterns/38_multi_agent) · message passing, blackboard, publish-subscribe, agent handoffs  
`39` [Memory & Context Management](https://karam-nus.github.io/design-patterns/39_memory) · working, episodic and semantic memory, context compression

**Appendices**

`A` [Pattern Quick Reference](https://karam-nus.github.io/design-patterns/appendix_a_quick_reference) · all 39 patterns on one page: intent, participants, ML use case  
`B` [Anti-Patterns in ML](https://karam-nus.github.io/design-patterns/appendix_b_antipatterns) · god module, spaghetti training loop, data leakage — and the refactors  
`C` [Glossary](https://karam-nus.github.io/design-patterns/appendix_c_glossary) · every pattern term, acronym, and concept defined

</details>

<details>
<summary><kbd>SOFTWARE ENGINEERING</kbd> &nbsp;·&nbsp; 20 chapters + 3 appendices &nbsp;<a href="https://karam-nus.github.io/software/">↗</a></summary>
<br>

From scripts to production — industry-standard software engineering for ML practitioners.

**Foundations**

`01` [Software Development Lifecycle](https://karam-nus.github.io/software/01_software_development_lifecycle) · Agile & Scrum for ML teams, sprint planning  
`02` [Version Control with Git](https://karam-nus.github.io/software/02_version_control_with_git) · branching strategies, conventional commits, monorepos  
`03` [Code Quality & Style](https://karam-nus.github.io/software/03_code_quality_and_style) · Ruff, Black, mypy, PEP 8, pre-commit hooks  
`04` [Testing for ML Software](https://karam-nus.github.io/software/04_testing_for_ml_software) · pytest, property-based testing, ML-specific patterns  
`05` [Design Patterns](https://karam-nus.github.io/software/05_design_patterns) · Strategy, Factory, Observer, Registry, Pipeline for ML

**Architecture & Design**

`06` [OOP & Functional Design](https://karam-nus.github.io/software/06_oop_and_functional_design) · SOLID, composition vs inheritance, Pydantic  
`07` [API Design & REST](https://karam-nus.github.io/software/07_api_design_and_rest) · FastAPI for model serving, gRPC, versioning  
`08` [Documentation](https://karam-nus.github.io/software/08_documentation) · Sphinx/MkDocs, docstrings, ADRs, README-driven dev  
`09` [Dependency & Package Management](https://karam-nus.github.io/software/09_dependency_and_package_management) · pip, conda, uv, lock files  
`10` [Build Systems & Automation](https://karam-nus.github.io/software/10_build_systems_and_automation) · Makefiles, CI/CD with GitHub Actions

**Infrastructure & Operations**

`11` [Containerization & Reproducibility](https://karam-nus.github.io/software/11_containerization_and_reproducibility) · Docker, multi-stage builds, NVIDIA container toolkit  
`12` [Configuration Management](https://karam-nus.github.io/software/12_configuration_management) · Hydra, OmegaConf, feature flags, 12-factor app  
`13` [Logging, Monitoring & Observability](https://karam-nus.github.io/software/13_logging_monitoring_and_observability) · structured logging, W&B, MLflow  
`14` [Error Handling & Debugging](https://karam-nus.github.io/software/14_error_handling_and_debugging) · pdb/ipdb, profiling, debugging distributed systems  
`15` [Code Review & Collaboration](https://karam-nus.github.io/software/15_code_review_and_collaboration) · PR best practices, trunk-based development, RFC process

**Systems & Performance**

`16` [Software Architecture](https://karam-nus.github.io/software/16_software_architecture) · monolith vs microservices, event-driven, ML pipeline architectures  
`17` [Performance & Profiling](https://karam-nus.github.io/software/17_performance_and_profiling) · cProfile, line_profiler, memory management, concurrency  
`18` [Security Best Practices](https://karam-nus.github.io/software/18_security_best_practices) · secrets management, OWASP basics, secure ML pipelines  
`19` [Data Engineering Basics](https://karam-nus.github.io/software/19_data_engineering_basics) · ETL/ELT, data validation, DVC, storage patterns  
`20` [ML System Design](https://karam-nus.github.io/software/20_ml_system_design) · model registry, feature stores, A/B testing, MLOps

**Appendices**

`A` [Package Management Deep Dive](https://karam-nus.github.io/software/appendix_a_package_management) · conda vs uv vs pip — complete workflows  
`B` [Unix & Shell Essentials](https://karam-nus.github.io/software/appendix_b_unix_and_shell) · shell scripting, SSH, tmux, cron, dotfiles  
`C` [VSCode Advanced Setup](https://karam-nus.github.io/software/appendix_c_vscode_setup) · extensions, debugging configs, remote dev, Copilot

</details>

<details>
<summary><kbd>ML CODING 101</kbd> &nbsp;·&nbsp; 11 packages &nbsp;<a href="https://karam-nus.github.io/code/">↗</a></summary>
<br>

Copy-paste-ready, package-by-package reference for the APIs used daily in CV and ML engineering.

**Data & Visualization**

`01` [NumPy](https://karam-nus.github.io/code/01_numpy) · array ops, broadcasting, indexing, memory layout, random  
`02` [OpenCV](https://karam-nus.github.io/code/02_opencv) · image I/O, color spaces, transforms, drawing, video, contours  
`03` [Matplotlib](https://karam-nus.github.io/code/03_matplotlib) · figures, subplots, image display, annotations, styling  
`04` [tqdm](https://karam-nus.github.io/code/04_tqdm) · progress bars, nested loops, pandas integration

**Training & Models**

`05` [TorchVision](https://karam-nus.github.io/code/05_torchvision) · transforms v2, datasets, pretrained models, feature extraction  
`06` [TorchAO](https://karam-nus.github.io/code/06_torchao) · quantization, sparsity, int8/int4, autoquant, kernel fusion  
`07` [TorchMetrics](https://karam-nus.github.io/code/07_torchmetrics) · classification, detection, segmentation metrics, custom metrics

**Experiment Tracking**

`08` [Weights & Biases](https://karam-nus.github.io/code/08_wandb) · logging, sweeps, artifacts, tables, model registry, reports  
`09` [MLflow](https://karam-nus.github.io/code/09_mlflow) · tracking, model registry, serving, projects, recipes

**Detection & Deployment**

`10` [Ultralytics](https://karam-nus.github.io/code/10_ultralytics) · YOLOv8/11: train, val, predict, export, track, segment, pose  
`11` [TensorRT](https://karam-nus.github.io/code/11_tensorrt) · ONNX conversion, engine building, INT8 calibration, dynamic shapes

</details>

