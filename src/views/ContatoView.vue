<template>
	<main class="contato">
		<div class="contato-content">
			<section class="card-intro">
				<h1>Contato</h1>
				<p>
					Me envie uma mensagem para orçamentos, parcerias ou dúvidas. Você pode falar comigo pelo
					formulário, e-mail, WhatsApp ou Instagram.
				</p>
			</section>

			<section class="card-formulario">
				<h2>Formulário de Contato</h2>

				<form class="formulario" @submit.prevent="enviarFormulario">
					<input type="hidden" name="access_key" value="f1c28cf4-b99a-4397-97a8-e8ea54f4d120" />
					<input type="hidden" name="subject" value="Novo contato pelo portfolio" />
					<input type="hidden" name="from_name" value="Portfolio Jess Wilbert" />
					<input type="checkbox" name="botcheck" class="hidden-botcheck" tabindex="-1" autocomplete="off" />

					<label for="nome">Nome</label>
					<input id="nome" name="Nome" type="text" placeholder="Seu nome" required />

					<label for="email">E-mail</label>
					<input
						id="email"
						name="Email"
						type="email"
						placeholder="seuemail@exemplo.com"
						required
					/>

					<label for="mensagem">Mensagem</label>
					<textarea
						id="mensagem"
						name="Mensagem"
						rows="6"
						placeholder="Escreva sua mensagem"
						required
					></textarea>

					<button type="submit" :disabled="enviando">
						{{ enviando ? 'Enviando...' : 'Enviar mensagem' }}
					</button>

					<p v-if="mensagemStatus" class="status-mensagem" :class="statusTipo">
						{{ mensagemStatus }}
					</p>
				</form>
			</section>

			<section class="card-canais">
				<h2>Outros Canais</h2>

				<a class="canal" href="mailto:jessica.wilbert@hotmail.com" target="_blank" rel="noopener noreferrer">
					<span class="canal-titulo">E-mail</span>
					<span class="canal-detalhe">jessica.wilbert@hotmail.com</span>
				</a>

				<a class="canal" href="https://wa.me/554791888898" target="_blank" rel="noopener noreferrer">
					<span class="canal-topo">
						<font-awesome-icon :icon="['fab', 'whatsapp']" class="icon-canal" />
						<span class="canal-titulo">WhatsApp</span>
					</span>
					<span class="canal-detalhe">(47) 9188-8898</span>
				</a>

				<a class="canal" href="https://www.instagram.com/jesswil.art" target="_blank" rel="noopener noreferrer">
					<span class="canal-topo">
						<font-awesome-icon :icon="['fab', 'instagram']" class="icon-canal" />
						<span class="canal-titulo">Instagram</span>
					</span>
					<span class="canal-detalhe">@jesswil.art</span>
				</a>
			</section>
		</div>
	</main>
</template>

<script setup>
import { ref } from 'vue'

const enviando = ref(false)
const mensagemStatus = ref('')
const statusTipo = ref('')

async function enviarFormulario(event) {
	const form = event.target
	const formData = new FormData(form)

	enviando.value = true
	mensagemStatus.value = ''
	statusTipo.value = ''

	try {
		const response = await fetch('https://api.web3forms.com/submit', {
			method: 'POST',
			body: formData,
		})

		const result = await response.json()

		if (response.ok && result.success) {
			mensagemStatus.value = 'MENSAGEM ENVIADA COM SUESSO!'
			statusTipo.value = 'status-sucesso'
			form.reset()
		} else {
			mensagemStatus.value = 'Nao foi possivel enviar agora. Tente novamente.'
			statusTipo.value = 'status-erro'
		}
	} catch {
		mensagemStatus.value = 'Erro de conexao. Tente novamente.'
		statusTipo.value = 'status-erro'
	} finally {
		enviando.value = false
	}
}
</script>

<style scoped>
.contato {
	color: white;
	padding: 50px 20px;
	font-family: 'Poppins', sans-serif;
}

.contato-content {
	max-width: 900px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	gap: 20px;
}

.card-intro,
.card-formulario,
.card-canais {
	background-color: #2a2a2a;
	border-radius: 12px;
	padding: 24px;
}

h1,
h2 {
	margin: 0 0 12px;
	font-weight: 600;
}

h1 {
	font-size: 2rem;
}

h2 {
	font-size: 1.3rem;
}

p {
	margin: 0;
	color: #bbb;
	line-height: 1.6;
}

.formulario {
	display: flex;
	flex-direction: column;
	gap: 10px;
}

.hidden-botcheck {
	display: none;
}

label {
	margin-top: 6px;
	color: #e8e8e8;
	font-size: 0.95rem;
}

input,
textarea {
	background-color: #1d1d1d;
	border: 1px solid #444;
	border-radius: 8px;
	color: #fff;
	padding: 12px;
	font-family: 'Poppins', sans-serif;
	font-size: 0.95rem;
}

input:focus,
textarea:focus {
	outline: none;
	border-color: #888;
}

button {
	margin-top: 10px;
	border: 1px solid #666;
	background-color: #3a3a3a;
	color: #fff;
	border-radius: 8px;
	padding: 12px;
	font-family: 'Poppins', sans-serif;
	font-size: 0.95rem;
	cursor: pointer;
	transition: background-color 0.2s ease;
}

button:hover {
	background-color: #4a4a4a;
}

button:disabled {
	opacity: 0.8;
	cursor: wait;
}

.status-mensagem {
	margin-top: 8px;
	font-size: 0.92rem;
	font-weight: 600;
}

.status-sucesso {
	color: #9fe7b2;
}

.status-erro {
	color: #f5a7a7;
}

.card-canais {
	display: flex;
	flex-direction: column;
	gap: 12px;
}

.canal {
	background-color: #1d1d1d;
	border: 1px solid #404040;
	border-radius: 10px;
	padding: 12px;
	text-decoration: none;
	color: #fff;
	display: flex;
	flex-direction: column;
	gap: 4px;
	transition: border-color 0.2s ease;
}

.canal:hover {
	border-color: #6a6a6a;
}

.canal-topo {
	display: flex;
	align-items: center;
	gap: 8px;
}

.icon-canal {
	font-size: 1.1rem;
}

.canal-titulo {
	font-weight: 600;
}

.canal-detalhe {
	color: #bbb;
	font-size: 0.95rem;
}

@media (max-width: 600px) {
	.contato {
		padding: 28px 14px;
	}

	.card-intro,
	.card-formulario,
	.card-canais {
		padding: 18px;
	}

	h1 {
		font-size: 1.6rem;
	}
}
</style>
