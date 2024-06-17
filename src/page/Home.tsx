import ImageWithText from '../components/ImageWithText/ImageWithText'
import certIcon from '../assets/certificate.jpg'
import listIcon from '../assets/list.jpg'
import studentIcon from '../assets/students.jpg'

const Home = () => {
  return (
    <>
      <h2 className="text-4xl font-semibold text-purple-200">Our Mission: Your Success</h2>
      <ImageWithText
        image={{
          src: studentIcon,
          alt: 'students at the lecture',
        }}
        title="What we do"
        description="ReactMentoring is a platform for React developers to find mentors who can help them with their React-related questions and problems. We are a community of React developers who want to help each other succeed."
      />
      <ImageWithText
        image={{ src: listIcon, alt: 'A list of sessions' }}
        title="What we offer"
        description="We offer a variety of mentoring sessions, from one-on-one mentoring to group mentoring sessions. Browse our available sessions to find the one that best fits your needs."
        rightIcon
      />
      <ImageWithText
        image={{ src: certIcon, alt: 'A certificate' }}
        title="What you get"
        description="No matter if you are a beginner or an experienced React developer, we are here to help you level up your React skills."
      />
    </>
  )
}

export default Home
