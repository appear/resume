import steyld from 'styled-components'

export default steyld.div`
  max-width: 768px;
  width: 100%;  
  padding: 0 20px;
  box-sizing: border-box;
  margin: 0 auto;

  @media (min-width: 768px) {
    max-width: 1024px;
  }
`
