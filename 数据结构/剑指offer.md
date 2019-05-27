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
### 反转链表
```c
class Solution {
public:
    ListNode* ReverseList(ListNode* pHead) {
        if(pHead == NULL)
            return NULL;
        ListNode *p1,*p2,*p3;
        p1=pHead;
        p2=pHead->next;
        while(p2 != NULL){
            p3 = p2->next;
            p2->next = p1;
            p1 = p2;
            p2 = p3;
        }
        pHead->next = NULL;
        pHead = p1;
        return pHead;
    }
};
```
### 合并两个排序的链表

```c
 ListNode* Merge(ListNode* pHead1, ListNode* pHead2)
    {
        if(pHead1 == NULL){
            return pHead2;
        }
        else if(pHead2 == NULL){
            return pHead1;
        }
        ListNode* pMergedHead = NULL;
        if(pHead1->val < pHead2->val){
            pMergedHead = pHead1;
               pMergedHead->next = Merge(pHead1->next, pHead2);
        }
        else{
            pMergedHead = pHead2;
               pMergedHead->next = Merge(pHead1, pHead2->next);
        }
        return pMergedHead;
    }
```

### 两个链表的第一个公共结点

```c
class Solution {
public:
    ListNode* FindFirstCommonNode( ListNode* pHead1, ListNode* pHead2) {
        if(pHead1 == NULL || pHead2 == NULL){
            return NULL;
        }
        int len1 = NodeLen(pHead1);
        int len2 = NodeLen(pHead2);
        ListNode* pLong = pHead1;
        ListNode* pShort = pHead2;
        int lenDif = len1 - len2;
        if(len2 > len1){
            pLong = pHead2;
            pShort = pHead1;
            lenDif = len2 - len1;
        }
        for(int i=0;i<lenDif;i++){
            pLong = pLong->next;
        }
        while(pLong != NULL && pShort != NULL && pLong != pShort){
            pLong = pLong->next;
            pShort = pShort->next;
        }
        return pLong;
    }
    
    int NodeLen(ListNode* pHead){
        if(pHead == NULL)
            return 0;
        ListNode* p = pHead;
        int len = 1;
        while(p->next != NULL){
            p = p->next;
            len++;
        }
        return len;
    }
};
```














