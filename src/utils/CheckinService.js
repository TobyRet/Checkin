function getCheckins() {

  const localStorageCheckin = {
    checkin: localStorage.checkin ? JSON.parse(localStorage.checkin) : {},
    checkedin: localStorage.checkedin ? JSON.parse(localStorage.checkedin) : false,
    profile: localStorage.profile ? JSON.parse(localStorage.profile) : {}
  }

  localStorageCheckin.checkin.reportWindow = false

  const dummyCheckin_1 = {
    profile: {
      nickname: 'Hulk Hogan',
      picture: 'http://www.wrestlingmuseum.com/images/photos/hogan-hulk15.jpg'
    },
    checkedin: true,
    checkin: {
      date: '2017-02-09T11:03:40.225Z',
      today: 'Pumping iron, fix my wrestling pants, buying new bandana',
      yesterday: 'Practiced shouting "Oh yeeeeeeaah"',
      questions: 'Does WWF still exist?',
      selectedCommits: ['[FIE-567] - Fixed broken tests', '[FIE-879] - Add Randy Savage to Blacklist'],
      reportWindow: false,
    }
  }

  const dummyCheckin_2 = {
    profile: {
      nickname: 'Trump',
      picture: 'http://static3.businessinsider.com/image/56feb17752bcd01b008ba4e8-480/donald-trump.jpg'
    },
    checkedin: true,
    checkin: {
      date: '2017-02-09T11:02:40.225Z',
      today: 'Making America great ... Going to hair dressers',
      yesterday: 'Made America great again',
      questions: 'Can you believe what happened in Sweden?!',
      selectedCommits: ['[FIE-456] - Added Piwik to my personal website', '[FIE-566] - Dockerized all the things'],
      reportWindow: false,
    }
  }

  const dummyCheckin3 = {
    checkedin: false,
    profile: {
      nickname: 'Putin',
      picture: 'http://media2.intoday.in/indiatoday/images/stories//2016March/putin-gif-mos_040116122426.gif',
    }
  }

  const dummyCheckin4 = {
    checkedin: false,
    profile: {
      nickname: 'Arnie',
      picture: 'http://gifup.com/data/avatars/1028.jpg',
    }
  }

  return [
      localStorageCheckin,
      dummyCheckin_1,
      dummyCheckin_2,
      dummyCheckin3,
      dummyCheckin4
    ]
}

module.exports = {getCheckins}
