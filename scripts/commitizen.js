const child_process = require('child_process')

function getJiraIssueFromBranch() {
  try {
    // Obtém o nome da branch atual usando Git
    const branch = child_process.execSync('git rev-parse --abbrev-ref HEAD').toString().trim()
    // Usa uma expressão regular para extrair o número da tarefa (assume o formato "feat/PROJ-1-descrição")
    const match = branch.match(/\/(PROJ-\d+)/)
    if (match) {
      return match[1] // Retorna o número da tarefa, como "PROJ-1"
    }
  } catch (error) {
    console.error('Erro ao obter o número da tarefa do JIRA:', error)
  }
  return null
}
module.exports = {
  prompter(cz, commit) {
    const jiraIssue = getJiraIssueFromBranch() // Tenta obter o número da tarefa do JIRA da branch

    // Pergunte ao usuário sobre o tipo de commit, o escopo, e o número da tarefa do JIRA
    cz.prompt([
      {
        type: 'list',
        name: 'type',
        message: 'Escolha o tipo de mudança que você está submetendo:',
        choices: [
          { value: 'feat', name: 'feat: Uma nova feature' },
          { value: 'fix', name: 'fix: Uma correção de bug' },
          { value: 'docs', name: 'docs: Alterações apenas nos documentos' },
          { value: 'style', name: 'style: Formatações, espaços em branco, etc' },
          { value: 'refactor', name: 'refactor: Refatoração de código' },
          { value: 'perf', name: 'perf: Melhoria na performance' },
          { value: 'test', name: 'test: Adicionando ou corrigindo testes' },
          { value: 'build', name: 'build: Mudanças que afetam o sistema de build' },
          { value: 'ci', name: 'ci: Mudanças em arquivos de CI' },
          { value: 'chore', name: 'chore: Atualizações rotineiras, não relacionadas com o código' },
          { value: 'revert', name: 'revert: Reverte um commit anterior' }
        ]
      },
      {
        type: 'input',
        name: 'jira',
        message: 'Qual é o número da tarefa do JIRA? (ex: PG-123):',
        default: jiraIssue // Usa o número extraído como padrão, se disponível
      },
      {
        type: 'input',
        name: 'description',
        message: 'Escreva uma descrição curta e imperativa da mudança:'
      }
    ]).then((answers) => {
      const message = `${answers.type}(${answers.jira}): ${answers.description}`
      commit(message)
    })
  }
}
