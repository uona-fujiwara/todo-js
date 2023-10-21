import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得して、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //liタグ生成
  const li = document.createElement("li");
  li.innerText = inputText;

  //divの子要素に各要素を設定する
  div.appendChild(li);

  //未完了のリストに追加する
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
