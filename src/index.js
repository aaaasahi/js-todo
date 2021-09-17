import "./styles.css";

const onClickAdd = () => {
  //　テキストボックスの値を取得して初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // divタグ作成
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグ作成
  const li = document.createElement("li");
  li.innerText = inputText;

  // 完了ボタン作成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // リストから削除
    deleteFromIncompleteList(completeButton.parentNode);

    //完了リストに追加する
    const addTarget = completeButton.parentNode;

    // todo内容の取得
    const text = addTarget.firstElementChild.innerText;

    // 完了リストに追加するために初期化
    addTarget.textContent = null;

    // liタグ作成
    const li = document.createElement("li");
    li.innerText = text;

    // 完了button作成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    // 親要素に子要素追加
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    // 完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });
  // 削除ボタン作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  // divタグの下にliタグを配置
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了リストを配置
  document.getElementById("incomplete-list").appendChild(div);

  // targetの親要素を削除
  const deleteFromIncompleteList = (target) => {
    document.getElementById("incomplete-list").removeChild(target);
  };
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
