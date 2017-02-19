function getCheckins() {

  // const localStorageCheckin = {
  //   checkin: JSON.parse(localStorage.checkin),
  //   profile: JSON.parse(localStorage.profile)
  // }
  //
  // localStorageCheckin.checkin.reportWindow = false

  const dummyCheckin_1 = {
    profile: {
      name: 'Hulk Hogan',
      picture: 'http://i0.kym-cdn.com/entries/icons/original/000/018/526/hulk-hogan.jpg'
    },
    checkin: {
      date: '2017-02-09T11:03:40.225Z',
      today: 'Lots of interesting stuff',
      yesterday: 'Boring stuff',
      question: 'How do you cook fish?',
      selectedPullRequests: ['http://www.google.com', 'http://www.google.com'],
      reportWindow: false
    }
  }

  const dummyCheckin_2 = {
    profile: {
      name: 'Trump',
      picture: 'http://static3.businessinsider.com/image/56feb17752bcd01b008ba4e8-480/donald-trump.jpg'
    },
    checkin: {
      date: '2017-02-09T11:02:40.225Z',
      today: 'Lots of interesting stuff',
      yesterday: 'Boring stuff',
      question: 'How do you cook sausage?',
      selectedPullRequests: ['http://www.google.com', 'http://www.google.com'],
      reportWindow: false

    }
  }

  const dummyCheckin3 = {
    profile: {
      name: 'Putin',
      picture: 'http://blogs.reuters.com/great-debate/files/2015/12/RTX1Z33F-606x416.jpg'
    }
  }

  const dummyCheckin4 = {
    profile: {
      name: 'Conan',
      picture: 'http://i.onionstatic.com/avclub/5446/15/16x9/960.jpg'
    }
  }

  return [
      // localStorageCheckin,
      dummyCheckin_1,
      dummyCheckin_2,
      dummyCheckin3,
      dummyCheckin4
    ]
}

module.exports = {getCheckins}
