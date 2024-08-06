interface Room {
  number: string;
  capacity: number;
}

interface Course {
  code: string;
  enrollment: number;
  preferences: string[];
}

interface Schedule {
  rooms: Room[];
  courses: string[];
  times: string[];
}

interface Preferences {
  courses: Course[];
}

function parseRooms(roomString: string): Room[] {
  return roomString
    .trim()
    .split(/\s+/)
    .map((room) => {
      const [number, capacity] = room.split(":");
      return { number, capacity: parseInt(capacity, 10) };
    });
}

function parseCourses(courseString: string): string[] {
  return courseString.trim().split(/\s+/);
}

function parseTimes(timeString: string): string[] {
  return timeString.trim().split(/\s+/);
}

function parseCoursePreferences(prefString: string): Course[] {
  return prefString
    .trim()
    .split("\n")
    .map((line) => {
      const [code, enrollment, ...preferences] = line.split(/\s+/);
      return { code, enrollment: parseInt(enrollment, 10), preferences };
    });
}

function parseFile1(input: string): Schedule {
  const [roomsString, coursesString, timesString] = input
    .split(/rooms|courses|times/)
    .slice(1);
  const rooms = parseRooms(roomsString);
  const courses = parseCourses(coursesString);
  const times = parseTimes(timesString);

  return { rooms, courses, times };
}

function parseFile2(input: string): Preferences {
  const courses = parseCoursePreferences(
    input
      .split(/course\s+/)
      .slice(1)
      .join("\n")
  );
  return { courses };
}

function formatSchedule(schedule: Schedule): string {
  const rooms = schedule.rooms
    .map((room) => `${room.number}:${room.capacity}`)
    .join(" ");
  const courses = schedule.courses.join(" ");
  const times = schedule.times.join(" ");

  return `rooms\n${rooms}\n\ncourses\n${courses}\n\ntimes\n${times}\n`;
}

function formatPreferences(preferences: Preferences): string {
  const courses = preferences.courses
    .map(
      (course) =>
        `course ${course.code} ${course.enrollment} ${course.preferences.join(
          " "
        )}`
    )
    .join("\n");

  return `${courses}\n`;
}

function convertFile1(input: string): string {
  const schedule = parseFile1(input);
  return formatSchedule(schedule);
}

function convertFile2(input: string): string {
  const preferences = parseFile2(input);
  return formatPreferences(preferences);
}

// Example usage
const file1Input = `rooms
F-101 30 105 : 40 1052 : 25 F30:50 301 :9 311: 325 320 200 310: 2113122a313: 34201:00678;
courses
XC539 x29 53ABc cs5394 csa59 cs250 CS 245 CS665 ;
times
TT TW10 TT10:30 MWF10:30 MWF9 MWF09 MWF789 10253 TTL2 TT11 TT10-30 ;`;

const file2Input = `course
cs305 25 TT8 TT6 TT9 MWF8
cs344 45 TT1
cd456 56 Tw56
cs365 200 TT1 MWF9
cs3a0 301 TT1
cs345 0 TT11:30
cs601 267 TT4
cs665 140 TT1
cs305 45 TT1
cs335 df TT1
cs645 45 TT1 TT11:30 TT8:30 MWF2 MWF11 MWF9
cs330 100 TT1 MWF9 MWF2 MWF11`;

console.log(convertFile1(file1Input));
console.log(convertFile2(file2Input));
