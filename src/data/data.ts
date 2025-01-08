export const menuItems = [
    {
      title: "MENU",
      items: [
        {
          icon: "/home.png",
          label: "Home",
          href: "/admin",
          visible: ["admin"],
        },
        {
          icon: "/home.png",
          label: "Home",
          href: "/teacher",
          visible: ["teacher"],
        },
        {
          icon: "/home.png",
          label: "Home",
          href: "/",
          visible: ["student"],
        },
        {
          icon: "/home.png",
          label: "Home",
          href: "/",
          visible: ["parent"],
        },      
        {
          icon: "/teacher.png",
          label: "Teachers",
          href: "/list/teachers",
          visible: ["admin", "teacher"],
        },
        {
          icon: "/student.png",
          label: "Students",
          href: "/list/students",
          visible: ["admin", "teacher"],
        },
        {
          icon: "/parent.png",
          label: "Parents",
          href: "/list/parents",
          visible: ["admin", "teacher"],
        },
        {
          icon: "/subject.png",
          label: "Subjects",
          href: "/list/subjects",
          visible: ["admin"],
        },
        {
          icon: "/class.png",
          label: "Classes",
          href: "/list/classes",
          visible: ["admin", "teacher"],
        },
        {
          icon: "/lesson.png",
          label: "Lessons",
          href: "/list/lessons",
          visible: ["admin", "teacher"],
        },
        {
          icon: "/exam.png",
          label: "Exams",
          href: "/list/exams",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
          icon: "/assignment.png",
          label: "Assignments",
          href: "/list/assignments",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
          icon: "/result.png",
          label: "Results",
          href: "/list/results",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
          icon: "/attendance.png",
          label: "Attendance",
          href: "/list/attendance",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
          icon: "/calendar.png",
          label: "Events",
          href: "/list/events",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
          icon: "/message.png",
          label: "Messages",
          href: "/list/messages",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
          icon: "/announcement.png",
          label: "Announcements",
          href: "/list/announcements",
          visible: ["admin", "teacher", "student", "parent"],
        },
      ],
    },
    {
      title: "OTHER",
      items: [
        {
          icon: "/profile.png",
          label: "Profile",
          href: "/profile",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
          icon: "/setting.png",
          label: "Settings",
          href: "/settings",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
          icon: "/logout.png",
          label: "Logout",
          href: "/logout",
          visible: ["admin", "teacher", "student", "parent"],
        },
      ],
    },
  ];



  export const events = [
    {
      id: 1,
      title: "Lorem ipsum dolor",
      time: "12:00 PM - 2:00 PM",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor",
      time: "12:00 PM - 2:00 PM",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor",
      time: "12:00 PM - 2:00 PM",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];


// Events data
  export const eventsData = [
    {
      id: 1,
      title: "Lake Trip",
      class: "1A",
      date: "2025-01-01",
      startTime: "10:00",
      endTime: "11:00",
    },
    {
      id: 2,
      title: "Picnic",
      class: "2A",
      date: "2025-01-01",
      startTime: "10:00",
      endTime: "11:00",
    },
    {
      id: 3,
      title: "Beach Trip",
      class: "3A",
      date: "2025-01-01",
      startTime: "10:00",
      endTime: "11:00",
    },
    {
      id: 4,
      title: "Museum Trip",
      class: "4A",
      date: "2025-01-01",
      startTime: "10:00",
      endTime: "11:00",
    },
    {
      id: 5,
      title: "Music Concert",
      class: "5A",
      date: "2025-01-01",
      startTime: "10:00",
      endTime: "11:00",
    },
    {
      id: 6,
      title: "Magician Show",
      class: "1B",
      date: "2025-01-01",
      startTime: "10:00",
      endTime: "11:00",
    },
    {
      id: 7,
      title: "Lake Trip",
      class: "2B",
      date: "2025-01-01",
      startTime: "10:00",
      endTime: "11:00",
    },
    {
      id: 8,
      title: "Cycling Race",
      class: "3B",
      date: "2025-01-01",
      startTime: "10:00",
      endTime: "11:00",
    },
    {
      id: 9,
      title: "Art Exhibition",
      class: "4B",
      date: "2025-01-01",
      startTime: "10:00",
      endTime: "11:00",
    },
    {
      id: 10,
      title: "Sports Tournament",
      class: "5B",
      date: "2025-01-01",
      startTime: "10:00",
      endTime: "11:00",
    },
  ];