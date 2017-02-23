function getCheckins() {

  const localStorageCheckin = {
    checkin: JSON.parse(localStorage.checkin),
    profile: JSON.parse(localStorage.profile)
  }

  localStorageCheckin.checkin.reportWindow = false

  const dummyCheckin_1 = {
    profile: {
      nickname: 'Hulk Hogan',
      picture: 'http://www.wrestlingmuseum.com/images/photos/hogan-hulk15.jpg'
    },
    checkin: {
      date: '2017-02-09T11:03:40.225Z',
      today: 'Pumping iron, fix my wrestling pants, buying new bandana',
      yesterday: 'Practiced shouting "Oh yeeeeeeaah"',
      question: 'Does WWF still exist?',
      selectedCommits: ['[FIE-567] - Fixed broken tests', '[FIE-879] - Add Randy Savage to Blacklist'],
      reportWindow: false
    }
  }

  const dummyCheckin_2 = {
    profile: {
      nickname: 'Trump',
      picture: 'http://static3.businessinsider.com/image/56feb17752bcd01b008ba4e8-480/donald-trump.jpg'
    },
    checkin: {
      date: '2017-02-09T11:02:40.225Z',
      today: 'Dismantling Obamacare, make America great ... Again, going to hair dressers',
      yesterday: 'Made America great again',
      question: 'Can you believe what happened in Sweden? Sweden of all places!',
      selectedCommits: ['[FIE-456] - Added Piwik to my personal website', '[FIE-566] - Removed Google Analytics from my personal website'],
      reportWindow: false
    }
  }

  const dummyCheckin3 = {
    profile: {
      nickname: 'Putin',
      picture: 'http://media2.intoday.in/indiatoday/images/stories//2016March/putin-gif-mos_040116122426.gif'
    }
  }

  const dummyCheckin4 = {
    profile: {
      nickname: 'Arnie',
      picture: 'http://gifup.com/data/avatars/1028.jpg'
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
