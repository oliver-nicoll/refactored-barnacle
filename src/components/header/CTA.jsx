import axios from 'axios'
import fileDownload from 'js-file-download'
import CV from '../../assets/cv.pdf'

const CTA = (url, filename) => {

  axios.get(url, {
    responseType: 'blob',
  }).then ((res) => {
    fileDownload(res.data, filename)
  })

  return (
    <div className="cta">
        <button onClick={() => {this.CTA('http://localhost:3000', {CV})}}>Download</button>
        {/* <a href={CV} download className='btn'>Download CV</a> */}
        <a href='#contact' className='btn btn-primary'>Let's Talk!</a>
    </div>
  )
}

export default CTA;