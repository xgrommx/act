import main from '../..'

const view = () =>
  ['div', [
    ['main', [
      ['h1', content]
    ]]
  ]]

const content = () => {
  throw('a')
}

main(view)
