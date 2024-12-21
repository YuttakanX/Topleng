document.addEventListener('click', () => {
  const audio = document.getElementById('background-music');
  if (audio.muted) {
      audio.muted = false; // Unmute after user interaction
  }
});
onload = () => {
  setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const messages = [
      'Happy Birth Day!!',
      'ในวันที่พิเศษแบบนี้',
      'ขอให้ความสุขและความน่ารักของเธอเพิ่มขึ้นทุกๆวัน',
      'ขอให้ทุกๆสิ่งที่เธอหวังเป็นอย่างที่เธอต้องการ',
      'และ',
      'ขอให้เค้ากับเธอ อยู่ด้วยกันตลอดไป',
      'เค้าจะอยู่เคียงข้างเธอเสมอ',
      'เค้าจะอยู่Happy Birth Day เธอทุกๆในปีต่อจากนี้',
      'ถึงเค้าจะไม่มีของขวัญอะไรมากมายเหมือนคู่อื่น',
      'แต่เค้ารักเธอมากกว่าคู่อื่นแน่นอน',
      'รักคุณแฟนที่สุดเล้ยยย!!!!',
      
    ];
    const titleElement = document.getElementById('title');
    const delay = 200; // Delay between character animations in milliseconds
    const pauseBetweenMessages = 1000; // Pause between messages in milliseconds
    let currentMessageIndex = 0;

    function appendTitle() {
      const currentMessage = messages[currentMessageIndex].split('');
      let index = 0;

      function typeCharacter() {
        if (index < currentMessage.length) {
          titleElement.innerHTML += currentMessage[index];
          index++;
          setTimeout(typeCharacter, delay);
        } else {
          setTimeout(() => {
            titleElement.innerHTML = ''; // Clear the text
            currentMessageIndex = (currentMessageIndex + 1) % messages.length; // Move to the next message, loop back if needed
            appendTitle(); // Start the next message
          }, pauseBetweenMessages);
        }
      }

      typeCharacter();
    }

    appendTitle();
  }, 1000);
};
