/**
 * 日付を「今日」または「◯日前」「◯日後」の形式に変換する関数
 *
 * @param {string} dateString - 変換したい日付の文字列（例: "Thu Feb 06 2025 21:35:09 GMT+0900 (日本標準時)"）
 * @returns {string} - 今日なら「今日」、過去なら「◯日前」、未来なら「◯日後」を返す
 *
 * @example
 * formatDate("Thu Feb 06 2025 21:35:09 GMT+0900 (日本標準時)");
 * // 今日の日付が2025年2月6日なら "今日" を返す
 *
 * formatDate("Tue Feb 04 2025 21:35:09 GMT+0900 (日本標準時)");
 * // 今日の日付が2025年2月6日なら "2日後" を返す
 *
 * formatDate("Sat Feb 08 2025 21:35:09 GMT+0900 (日本標準時)");
 * // 今日の日付が2025年2月6日なら "2日前" を返す
 */
export function formatDate(dateString) {
  const inputDate = new Date(dateString);
  const today = new Date();

  // 時間を無視して日付のみで比較するため、時刻を00:00:00にリセット
  inputDate.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  // 日付の差分をミリ秒で取得し、1日のミリ秒数で割って日数に変換
  const diffTime = today - inputDate;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) {
    return "今日";
  } else if (diffDays > 0) {
    return `${diffDays}日前`;
  } else {
    return `${Math.abs(diffDays)}日後`;
  }
}
