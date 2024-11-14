
import * as actionTypes from './ActionTypes';
import api from '@/config/api'; 

// fetch issues
export const fetchIssues = (id) => { 
    return async (dispatch) => {
        dispatch({ type: actionTypes.FETCH_ISSUES_REQUEST });
        try {
            const response = await api.get(
                `/api/issues/project/${id}`
            );
            console.log("fetch issues", response.data);
            dispatch({
                type: actionTypes.FETCH_ISSUES_SUCCESS,
                issues: response.data,
            });
        } catch (error) {
            dispatch({
                type: actionTypes.FETCH_ISSUES_FAILURE,
                error: error.message,
            });
        }
    }
}

// fetch issue by id
export const fetchIssueById = (id) => { 
    return async (dispatch) => {
        dispatch({ type: actionTypes.FETCH_ISSUES_BY_ID_REQUEST });
        try {
            const response = await api.get(
                `/api/issues/${id}`
            );
            console.log("fetch issue by id", response.data);
            dispatch({
                type: actionTypes.FETCH_ISSUES_BY_ID_SUCCESS,
                issues: response.data,
            });
        } catch (error) {
                        console.error("fetch issue by id error", error); // Log any errors

            dispatch({
                type: actionTypes.FETCH_ISSUES_BY_ID_FAILURE,
                error: error.message,
            });
        }
    }
}

// update issue status
export const updateIssueStatus = ({ id, status }) => { 
    return async (dispatch) => {
        dispatch({ type: actionTypes.UPDATE_ISSUE_STATUS_REQUEST });
        try {
            const response = await api.put(
                `/api/issues/${id}/status/${status}`);
            console.log("update issue status", response.data);
            dispatch({
                type: actionTypes.UPDATE_ISSUE_STATUS_SUCCESS,
                issues: response.data,
            });
        } catch (error) {
                        console.error("update issue status error", error); // Log any errors

            dispatch({
                type: actionTypes.UPDATE_ISSUE_STATUS_FAILURE,
                error: error.message,
            });
        }
    }
}

// assign issue to user
export const assignedUserToIssue = ({ issueId, userId }) => { 
    return async (dispatch) => {
        dispatch({ type: actionTypes.ASSIGNED_ISSUE_TO_USER_REQUEST });
        try {
            const response = await api.put(
                `/api/issues/${issueId}/assignee/${userId}`);
            console.log("assigned issue --- ", response.data);
            dispatch({
                type: actionTypes.ASSIGNED_ISSUE_TO_USER_SUCCESS,
                issues: response.data,
            });
        } catch (error) {
            console.log("error ",error);
            dispatch({
                type: actionTypes.ASSIGNED_ISSUE_TO_USER_FAILURE,
                error: error.message,
            });
        }
    }  
}

// create issue
export const createIssue = (issueData) => { 
    return async (dispatch) => {
        dispatch({ type: actionTypes.CREATE_ISSUE_REQUEST });
        try {
            const response = await api.post(
                "/api/issues", issueData);
          
            dispatch({
                type: actionTypes.CREATE_ISSUE_SUCCESS,
                issue: response.data,
            });
            console.log("issue created successfully", response.data);
        } catch (error) {
                        console.error("create issue error", error); // Log any errors

            dispatch({
                type: actionTypes.CREATE_ISSUE_FAILURE,
                error: error.message,
            });
        }
    }
}


//delete issue
export const deleteIssue = (issueId) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.DELETE_ISSUE_REQUEST });
    try {
      await api.delete(`/api/issues/${issueId}`);
      dispatch({
        type: actionTypes.DELETE_ISSUE_SUCCESS,
        issueId,  // Use issueId to match reducer's expectation
      });
    } catch (error) {
      dispatch({
        type: actionTypes.DELETE_ISSUE_FAILURE,
        error: error.message,
      });
    }
  };
};