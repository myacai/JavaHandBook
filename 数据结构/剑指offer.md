@[TOC](剑指offer)
<!-- MarkdownTOC -->
- [链表](#链表)
<!-- /MarkdownTOC -->

## 链表
### 从尾到头打印链表

```c
class Solution {
public:
    vector<int> printListFromTailToHead(ListNode* head) {
        stack<int> s;
        vector<int> result;
        ListNode* p = head;
        while(p != NULL){
            s.push(p->val);
            p = p->next;
        }
        while( !s.empty()){
            result.push_back(s.top());
            s.pop();
        }
        return result;
    }
};
```


### 输入一个链表，输出该链表中倒数第k个结点
```c
class Solution {
public:
    ListNode* FindKthToTail(ListNode* pListHead, unsigned int k) {
        if(pListHead == NULL)
            return NULL;
        ListNode *p1=pListHead,*p2=pListHead;
        unsigned int i;
        for(i=0;i<k-1;i++){
            if(p1->next != NULL){
                p1 = p1->next;
            }else{
                return NULL;
            }
        }
        while(p1->next != NULL){
            p1 = p1->next;
            p2 = p2->next;
        }
        return p2;
    }
};
```
