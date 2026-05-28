<script setup>
import { computed, ref } from 'vue'

const allModules = import.meta.glob(
	[
		'../assets/imagens/*/*.{png,jpg,jpeg,JPG,JPEG,webp,avif,svg,SVG}',
		'!../assets/imagens/**/*#*',
		'!../assets/imagens/**/*[[]*',
	],
	{
		eager: true,
		import: 'default',
	}
)

const videoModules = import.meta.glob('../assets/imagens/Videos Gif/*.{gif,GIF}', {
	eager: true,
	import: 'default',
})

const tabs = [
	{ id: 'ilustracoes', label: 'Ilustração Digital' },
	{ id: 'videos', label: 'Vídeos' },
	{ id: 'branding', label: 'Branding' },
	{ id: 'design', label: 'Design Gráfico' },
]

const excludedFolders = new Set(['ARTEDIGITAL', 'FLUXOGAMA', 'TRICOSTURA', 'DOMEN', 'CONNECTBOX'])
const brandingOnlyFolders = new Set(['CONNECTBOX', 'DOMEN', 'TRICOSTURA', 'FLUXOGAMA'])

const folderDescriptions = {
	'Ilustração Digital': 'Colecao de artes autorais e estudos visuais desenvolvidos em ilustracao digital utilizando Photoshop, muitos no Instituto Belas Artes para ensino de alunos ou exosições. ',
	'121 SHOP': 'Apresentacao comercial da 121 Smart Shop com pecas para feed, stories e materiais institucionais.',
	ACOCERTO: 'Campanhas e materiais visuais para comunicacao da AcoCerto em diferentes formatos digitais.',
	CARDIONUTRI: 'Conteudos visuais para comunicacao de servicos e autoridade da marca CardioNutri.',
	CBG: 'Pecas de identidade e publicacoes para fortalecimento da presenca digital da marca CBG.',
	HAPO: 'Materiais graficos para campanhas e comunicacao de marca com foco em clareza visual.',
	KRENKE: 'Conjunto de artes para posicionamento de marca e divulgacao de produtos.',
	LADIMAS: 'Design de comunicacao para redes sociais e materiais promocionais da Ladimas.',
	LOGCERTO: 'Colecao de pecas criativas para comunicacao digital e fortalecimento institucional.',
	MENEGOTTI: 'Materiais visuais para campanhas sazonais, institucionais e promocionais da Menegotti.',
	MESAVILLE: 'Artes para feed e campanhas de conversao com linguagem visual consistente.',
	MULTIVISI: 'Pecas de comunicacao visual para performance digital e reconhecimento da marca.',
	SOLIDUZ: 'Identidade e pecas graficas para comunicacao de servicos e captacao de clientes.',
	'CONNECT BOX': 'Projetos de branding e comunicacao visual para posicionamento da Connect Box.',
	DOMEN: 'Pecas de marca e comunicacao institucional para fortalecer a presenca da Domen.',
	TRICOSTURA: 'Materiais de branding aplicados em redes sociais e campanhas de divulgacao.',
	FLUXOGAMA: 'Colecao visual de branding e comunicacao para consolidacao da identidade Fluxogama.',
	'RD Summit': 'Colecao de GIFs e motion pieces criados para campanhas e divulgacao do RD Summit.',
	'Mercadão dos Óculos': 'Animacoes promocionais desenvolvidas para campanhas sazonais da rede.',
	Univille: 'Sequencia de videos curtos em GIF para divulgacao institucional e promocional.',
	KRENKE: 'Conteudos em motion para apresentacao institucional e cobertura de eventos.',
	Tricostura: 'Animacoes de marca e vinhetas para reforco de identidade visual.',
	Ladimas: 'Pecas em GIF para comunicacao digital e campanhas de engajamento.',
	'121 Shop': 'Videos e GIFs de apoio comercial e divulgacao de servicos.',
}

const folderVideoLinks = {
	'121 Shop': ['https://drive.google.com/file/d/1JXokPPKISTa6AMhzgt1WoCMGv9aj_DGw/view'],
	Krenke: [
		'https://drive.google.com/file/d/1lP7cBuevdIiwMjuzqMSyq7ttr9WkNYNp/view',
		'https://drive.google.com/file/d/1nnvzFxnvvEv5tAt71j4yHcstj_bH94R4/view',
		'https://drive.google.com/file/d/1GRVscwtaZxrtuFROeHnDPZYxifIZapEj/view',
		'https://drive.google.com/file/d/1gbIEU2A2LXlT6rT5qhGPb8aAQlw8ysht/view',
	],
	Tricostura: ['https://drive.google.com/file/d/1_SSx8AFNL0Krme4P13o17yEAlaegVaGG/view'],
	'Mercadão dos Óculos': [
		'https://drive.google.com/file/d/1K8zg9tNd3rI6mxFGUxw5qWph87MWbBIS/view?usp=sharing',
		'https://drive.google.com/file/d/1K8zg9tNd3rI6mxFGUxw5qWph87MWbBIS/view?usp=sharing',
	],
	'RD Summit': [
		'https://drive.google.com/file/d/1svPeRPgtw9ZEn6sUotPr639EJszkiwxB/view?usp=sharing',
		'https://drive.google.com/file/d/1aloThi7C_TZ1fPDwHQaeHqmSPXv3D6PX/view?usp=sharing',
		'https://drive.google.com/file/d/1Z9s4nwa0UMZIidBU8pr4kHWk0rKniB_G/view?usp=sharing',
		'https://drive.google.com/file/d/1nDe_Jgv-fOUR-mlFL7wxO-A23feWDNBo/view?usp=sharing',
		'https://drive.google.com/file/d/18svT68MnN-3aYECflBaG7qolPGIS_a1E/view?usp=sharing',
	],
	Univille: [
		'https://drive.google.com/file/d/1zi5bH9hV3ve1e0WtjoBqXblG_3eRCPLB/view?usp=sharing',
		'https://drive.google.com/file/d/122wAB_GXtc9Z8udwjai17CVLgsE8a6Y7/view?usp=sharing',
		'https://drive.google.com/file/d/1JDJgb0z-ZVClr2k3vsjtvi36f3XPY6Qf/view?usp=sharing',
	],
	Ladimas: [
		'https://drive.google.com/file/d/1hj4sN30deFdLnxL6UGFYRHkWHInbFilv/view?usp=drive_link',
		'https://drive.google.com/file/d/1AbEQccoGc0JnOHO3avdXR6KjjAbrDvaJ/view?usp=drive_link',
		'https://drive.google.com/file/d/1VN5uC0zreAnZiG0Mw6h8HWxUcxzwmLiJ/view?usp=drive_link',
	],
}

const illustrationTitlesByFile = {
	'caranguejo.png': 'Caranguejo',
	'coelho2.png': 'Coelho',
	'finalização pintura 3.jpg': 'Retrato',
	'grunge town storie.jpg': 'Grunge Town I',
	'grungetown2 storie.jpg': 'Grunge Town II',
	'Jessica Wilbert.jpg': 'Retrato',
	'lava girl 2.jpg': 'Neon',
	'macaco.jpg': 'Macaco',
	'Moça (1).jpg': 'Retrato',
	'SérgioFinal1.jpg': 'Cena',
	'tigre short (1).jpg': 'Tigre',
	'vaca.jpg': 'Vaca',
}

function normalizeFolderName(name) {
	return name.replace(/\s+/g, '').toUpperCase()
}

function normalizeText(text) {
	return text
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.replace(/[_-]+/g, ' ')
		.replace(/\s+/g, ' ')
		.trim()
		.toUpperCase()
}

function formatLabel(text) {
	const formatted = text.replace(/[_-]+/g, ' ').replace(/\s+/g, ' ').trim()

	if (formatted.toUpperCase() === 'KREMKE') return 'KRENKE'

	return formatted
}

function formatImageTitle(fileName) {
	return fileName
		.replace(/\.[^.]+$/, '')
		.replace(/\s*\([^)]*\)/g, '')
		.replace(/[_-]+/g, ' ')
		.replace(/\s+/g, ' ')
		.trim()
}

const rawImages = Object.entries(allModules)
	.map(([path, src]) => {
		const match = path.match(/\.\.\/assets\/imagens\/([^/]+)\/([^/]+)$/)
		if (!match) return null

		const folder = match[1]
		const fileName = match[2]

		return {
			id: path,
			folder,
			fileName,
			src,
			title: formatImageTitle(fileName),
		}
	})
	.filter(Boolean)

const illustrationImages = rawImages
	.filter((image) => normalizeFolderName(image.folder) === 'ARTEDIGITAL')
	.map((image) => ({
		...image,
		title: illustrationTitlesByFile[image.fileName] || image.title,
	}))
	.sort((a, b) => a.title.localeCompare(b.title, 'pt-BR'))

function getVideoGroupName(fileName) {
	const normalized = normalizeText(fileName)

	if (normalized.includes('RD SUMMIT')) return 'RD Summit'
	if (normalized.includes('MERCADAO') && normalized.includes('OCULOS')) return 'Mercadão dos Óculos'
	if (normalized.includes('UNIVILLE')) return 'Univille'
	if (normalized.includes('KRENKE')) return 'KRENKE'
	if (normalized.includes('TRICOSTURA')) return 'Tricostura'
	if (normalized.includes('LADIMAS')) return 'Ladimas'
	if (normalized.includes('121')) return '121 Shop'

	return 'Outros'
}

const videoFolders = Object.values(
	Object.entries(videoModules).reduce((acc, [path, src]) => {
		const fileName = path.split('/').pop() || ''
		const groupName = getVideoGroupName(fileName)

		if (!acc[groupName]) {
			acc[groupName] = {
				id: `videos-${normalizeFolderName(groupName).toLowerCase()}`,
				name: groupName,
				images: [],
			}
		}

		acc[groupName].images.push({
			id: path,
			folder: 'Videos Gif',
			fileName,
			src,
			title: formatImageTitle(fileName),
		})

		return acc
	}, {})
)
	.map((group) => ({
		...group,
		images: group.images.sort((a, b) => a.title.localeCompare(b.title, 'pt-BR')),
		cover: group.images[0] || null,
	}))
	.sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'))

function buildFolderCollection(filterFn) {
	return Object.values(
		rawImages.reduce((acc, image) => {
			if (!filterFn(image)) {
				return acc
			}

			if (!acc[image.folder]) {
				acc[image.folder] = {
					id: image.folder.toLowerCase().replace(/\s+/g, '-'),
					name: formatLabel(image.folder),
					images: [],
				}
			}

			acc[image.folder].images.push(image)
			return acc
		}, {})
	)
		.map((folder) => ({
			...folder,
			images: folder.images.sort((a, b) => a.title.localeCompare(b.title, 'pt-BR')),
			cover: folder.images[0] || null,
		}))
		.sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'))
}

const designFolders = buildFolderCollection((image) => !excludedFolders.has(normalizeFolderName(image.folder)))

const brandingFolders = buildFolderCollection((image) =>
	brandingOnlyFolders.has(normalizeFolderName(image.folder))
)

const activeTab = ref('design')
const selectedFolder = ref(null)
const selectedImage = ref(null)
const modalOpen = ref(false)

const currentFolders = computed(() => {
	if (activeTab.value === 'design') return designFolders
	if (activeTab.value === 'branding') return brandingFolders
	if (activeTab.value === 'videos') return videoFolders
	return []
})

const tabHasContent = computed(
	() =>
		(activeTab.value === 'design' || activeTab.value === 'branding' || activeTab.value === 'videos') &&
		currentFolders.value.length > 0
)

const activeTabLabel = computed(() => tabs.find((tab) => tab.id === activeTab.value)?.label || 'Categoria')

const illustrationFolder = computed(() => ({
	id: 'ilustracoes',
	name: 'Ilustração Digital',
	images: illustrationImages,
}))
const selectedFolderDescription = computed(() => {
	if (!selectedFolder.value) return ''
	return folderDescriptions[selectedFolder.value.name] || 'Descricao em atualizacao.'
})

const selectedFolderVideoLinks = computed(() => {
	if (!selectedFolder.value) return []
	return folderVideoLinks[selectedFolder.value.name] || []
})

function openFolder(folder) {
	selectedFolder.value = folder
	selectedImage.value = folder.images[0] || null
	modalOpen.value = true
}

function openIllustration(image) {
	selectedFolder.value = illustrationFolder.value
	selectedImage.value = image
	modalOpen.value = true
}

function closeModal() {
	modalOpen.value = false
	selectedFolder.value = null
	selectedImage.value = null
}

function selectImage(image) {
	selectedImage.value = image
}
</script>

<template>
	<main class="portfolio-home">
		<section class="tabs-bar" aria-label="Categorias do portfolio">
			<button
				v-for="tab in tabs"
				:key="tab.id"
				type="button"
				class="tab-button"
				:class="{ active: activeTab === tab.id }"
				@click="activeTab = tab.id"
			>
				{{ tab.label }}
			</button>
		</section>

		<section v-if="activeTab === 'design' || activeTab === 'branding' || activeTab === 'videos'" class="cards-grid">
			<article
				v-for="folder in currentFolders"
				:key="folder.id"
				class="folder-card"
				@click="openFolder(folder)"
			>
				<img v-if="folder.cover" :src="folder.cover.src" :alt="folder.name" class="card-image" />
				<div class="card-overlay">
					<h2>{{ folder.name }}</h2>
					<span>{{ folder.images.length }} imagens</span>
				</div>
			</article>

			<p v-if="!tabHasContent" class="empty-state">Nenhuma pasta encontrada para {{ activeTabLabel }}.</p>
		</section>

		<section v-else-if="activeTab === 'ilustracoes'" class="cards-grid">
			<article
				v-for="image in illustrationImages"
				:key="image.id"
				class="folder-card"
				@click="openIllustration(image)"
			>
				<img :src="image.src" :alt="image.title" class="card-image" />
				<div class="card-overlay">
					<h2>{{ image.title }}</h2>
					<span>Arte</span>
				</div>
			</article>

			<p v-if="!illustrationImages.length" class="empty-state">
				Nenhuma imagem encontrada para Ilustração Digital.
			</p>
		</section>

		<section v-else class="cards-grid">
			<p class="empty-state">Categoria pronta para receber conteúdo.</p>
		</section>

		<div v-if="modalOpen && selectedFolder && selectedImage" class="modal-backdrop" @click.self="closeModal">
			<section class="modal-panel">
				<div class="modal-header">
					<button class="close-button" type="button" @click="closeModal">Fechar</button>
				</div>

				<div class="modal-layout">
					<div class="modal-viewer">
						<img :src="selectedImage.src" :alt="selectedImage.title" class="modal-image" />
					</div>

					<aside class="modal-sidebar">
						<div class="modal-info">
							<h2>{{ selectedFolder.name }}</h2>
							<p>{{ selectedFolderDescription }}</p>
							<ul v-if="selectedFolderVideoLinks.length" class="video-links">
								<li v-for="(link, index) in selectedFolderVideoLinks" :key="link + index">
									<a :href="link" target="_blank" rel="noopener noreferrer">
										Ver video completo {{ index + 1 }}
									</a>
								</li>
							</ul>
						</div>

						<div class="thumbs-grid">
							<button
								v-for="image in selectedFolder.images"
								:key="image.id"
								type="button"
								class="thumb-button"
								:class="{ active: selectedImage.id === image.id }"
								@click="selectImage(image)"
							>
								<img :src="image.src" :alt="image.title" />
							</button>
						</div>
					</aside>
				</div>
			</section>
		</div>
	</main>
</template>

<style scoped>
.portfolio-home {
	color: #fff;
	padding: 14px 20px 72px;
	font-family: 'Poppins', sans-serif;
}

.tabs-bar,
.cards-grid,
.modal-panel {
	max-width: 1120px;
	margin: 0 auto;
}

.tabs-bar {
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	align-items: center;
	margin-bottom: 14px;
	padding: 8px;
	border-radius: 14px;
	background: #141414;
	border: 1px solid #242424;
}

.tab-button {
	background: transparent;
	border: 1px solid #2e2e2e;
	border-radius: 999px;
	color: #c7c7c7;
	font-family: 'Poppins', sans-serif;
	font-size: 0.9rem;
	padding: 8px 13px;
	cursor: pointer;
	transition: all 0.2s ease;
}

.tab-button:hover {
	border-color: #515151;
	color: #fff;
}

.tab-button.active {
	background: #2f2f2f;
	border-color: #5b5b5b;
	color: #fff;
	font-weight: 600;
}

.cards-grid {
	display: grid;
	grid-template-columns: repeat(2, minmax(0, 1fr));
	gap: 12px;
}

.folder-card {
	position: relative;
	margin: 0;
	border-radius: 14px;
	border: 1px solid #2c2c2c;
	overflow: hidden;
	aspect-ratio: 16 / 8;
	background: #101010;
	cursor: pointer;
	transition: transform 0.25s ease, border-color 0.25s ease;
}

.folder-card:hover {
	transform: translateY(-3px);
	border-color: #555;
}

.card-image {
	width: 100%;
	height: 100%;
	object-fit: cover;
	display: block;
}

.card-overlay {
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	padding: 12px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 10px;
	background: linear-gradient(to top, rgba(0, 0, 0, 0.82), rgba(0, 0, 0, 0));
}

.card-overlay h2 {
	margin: 0;
	font-size: 1rem;
	font-weight: 600;
}

.card-overlay span {
	font-size: 0.85rem;
	color: #d0d0d0;
	white-space: nowrap;
}

.empty-state {
	grid-column: 1 / -1;
	text-align: center;
	padding: 24px;
	background: #171717;
	border: 1px solid #2f2f2f;
	border-radius: 14px;
	color: #afafaf;
}

.modal-backdrop {
	position: fixed;
	inset: 0;
	background: rgba(0, 0, 0, 0.72);
	backdrop-filter: blur(10px);
	padding: 24px;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 40;
}

.modal-panel {
	width: min(1140px, 100%);
	max-height: calc(100vh - 48px);
	overflow: auto;
	padding: 16px;
	background: #1b1b1b;
	border: 1px solid #303030;
	border-radius: 16px;
	position: relative;
}

.modal-header {
	display: flex;
	justify-content: flex-end;
	margin-bottom: 10px;
}

.modal-layout {
	display: grid;
	grid-template-columns: minmax(0, 1fr) 300px;
	gap: 14px;
	align-items: stretch;
}

.modal-viewer {
	display: flex;
	align-items: center;
	justify-content: center;
	background: #111;
	border: 1px solid #2f2f2f;
	border-radius: 12px;
	padding: 10px;
	min-height: min(72vh, 720px);
}

.modal-image {
	width: 100%;
	max-height: min(68vh, 700px);
	object-fit: contain;
	object-position: center center;
	display: block;
	border-radius: 10px;
	background: #0f0f0f;
}

.modal-sidebar {
	display: flex;
	flex-direction: column;
	gap: 12px;
	max-height: calc(100vh - 120px);
	padding: 10px;
	border: 1px solid #2e2e2e;
	border-radius: 12px;
	background: linear-gradient(180deg, #1d1d1d 0%, #141414 100%);
}

.modal-info {
	padding: 14px;
	border: 1px solid #3a3a3a;
	border-radius: 12px;
	background: rgba(10, 10, 10, 0.45);
	backdrop-filter: blur(2px);
	box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
}

.modal-info h2 {
	margin: 0;
	font-size: 1.04rem;
	font-weight: 600;
	letter-spacing: 0.01em;
}

.modal-info p {
	margin: 10px 0 0;
	color: #b3b3b3;
	font-size: 0.92rem;
	line-height: 1.5;
}

.video-links {
	margin: 12px 0 0;
	padding-left: 18px;
	display: grid;
	gap: 6px;
}

.video-links li {
	color: #9f9f9f;
	font-size: 0.9rem;
}

.video-links a {
	color: #8ec8ff;
	text-decoration: none;
}

.video-links a:hover {
	text-decoration: underline;
}

.thumbs-grid {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 10px;
	overflow: auto;
	padding-right: 4px;
}

.thumbs-grid::-webkit-scrollbar {
	width: 8px;
}

.thumbs-grid::-webkit-scrollbar-track {
	background: #111;
	border-radius: 99px;
}

.thumbs-grid::-webkit-scrollbar-thumb {
	background: #3f3f3f;
	border-radius: 99px;
}

.thumb-button {
	padding: 5px;
	border: 1px solid #353535;
	background: #181818;
	border-radius: 10px;
	cursor: pointer;
	transition: border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
}

.thumb-button:hover,
.thumb-button.active {
	border-color: #7a7a7a;
	transform: translateY(-2px);
	box-shadow: 0 8px 18px rgba(0, 0, 0, 0.35);
}

.thumb-button.active {
	outline: 1px solid rgba(255, 255, 255, 0.28);
}

.thumb-button img {
	width: 100%;
	aspect-ratio: 1 / 1;
	object-fit: cover;
	display: block;
	border-radius: 6px;
}

.close-button {
	font-family: 'Poppins', sans-serif;
	border: 1px solid #3f3f3f;
	background: #262626;
	color: #fff;
	border-radius: 10px;
	padding: 8px 12px;
	cursor: pointer;
	transition: background-color 0.2s ease;
}

.close-button:hover {
	background: #303030;
}

@media (max-width: 820px) {
	.cards-grid {
		grid-template-columns: 1fr;
	}

	.folder-card {
		aspect-ratio: 16 / 9;
	}

	.modal-layout {
		grid-template-columns: 1fr;
	}

	.modal-sidebar {
		max-height: none;
	}

	.modal-viewer {
		min-height: auto;
	}

	.modal-image {
		max-height: 55vh;
	}

	.thumbs-grid {
		grid-template-columns: repeat(3, 1fr);
	}
}

@media (max-width: 640px) {
	.portfolio-home {
		padding: 12px 12px 36px;
	}

	.tabs-bar {
		gap: 8px;
		margin-bottom: 14px;
		padding: 8px;
	}

	.tab-button {
		font-size: 0.88rem;
		padding: 7px 10px;
	}

	.modal-backdrop {
		padding: 10px;
	}

	.thumbs-grid {
		grid-template-columns: repeat(2, 1fr);
	}
}
</style>
