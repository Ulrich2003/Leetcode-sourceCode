/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // 保存头节点
    let backupHead = head;
    // 遍历链表，确定里面节点的个数
    let count = 0;
    while (head.next!==null){
        count++;
        head = head.next;
    }
    // 计算倒数第n个元素是正着数的第几个元素
    n = count-n+1;
    // 删除该元素
    head = backupHead;
    for (let i = 0; i<n-1;i++){
        head = head.next;
    }
    if (head.next==null){
        backupHead = null;
    }else if (n==0){
        backupHead = head.next;
    }else{
        head.next = head.next.next;
    }
    // 返回头节点
    return backupHead;
};