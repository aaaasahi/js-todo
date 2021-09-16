import "./styles.css";

const onClickAdd = () => {
  //　テキストボックスの値を取得して初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // liタグ作成
  const li = document.createElement("li");

  // divタグ作成
  const div = document.createElement("div");
  div.className = "list-row";

  // pタグ作成
  const p = document.createElement("p");
  p.innerText = inputText;

  // 完了ボタン作成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";

  // 削除ボタン作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";

  // liタグの下にdivタグを配置
  li.appendChild(div);

  // divタグの下にpタグを配置
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了リストを配置
  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
